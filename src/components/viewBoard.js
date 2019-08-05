import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import profileImage from '../images/profile-image-test.jpg'
import placeImage from '../images/place-image-test.jpg'
import { Link } from "gatsby"
import firebase from "firebase"
import { useEffect, useState } from "react"

const Container = styled.div`
display: flex;
flex-direction:column;
padding:15px;
width: 555px;
height: 450px;
background: #EFEFEF;
border-radius: 5px;
margin-top:20px;
`

const PlacePhoto = styled.div`
width: 525px;
height: 125px;
background: url(${placeImage});
border-radius: 5px;
margin-top: 10px;
background-size: cover;
margin-bottom: 10px;
`;


const Avatar = styled.div`
width: 82.94px;
height: 84.17px;
background: url(${profileImage});
background-size: cover;
border-radius:5px;
cursor:pointer;
`

const Text = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 19px;
margin-top: 10px;
color: #000000;
`

const StrongText = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 19px;
color: #000000;
cursor:pointer;
`

const Header = styled.div`
display: flex;
flex-direction: column;
margin-left:10px;
justify-content:center;
`

const HeaderContainer = styled.div`
display:flex;
`

export const ViewBoard = ({ id }) => {

	const [userId, setUserId] = useState(0);
	const [userName, setUserName] = useState("");
	const [placeName, setPlaceName] = useState("");
	const [placeId, setPlaceId] = useState(0);
	const [time, setTime] = useState("00:00:00");
	const [description, setDescription] = useState("");


	useEffect(() => {
		const viewRef = firebase.database().ref(`/views/${id}`);
		viewRef.on("value", snapshot => setUserId(snapshot.val().userId))
		viewRef.on("value", snapshot => setPlaceId(snapshot.val().placeId))
		viewRef.on("value", snapshot => setTime(snapshot.val().time))
		viewRef.on("value", snapshot => setDescription(snapshot.val().description))

		const userRef = firebase.database().ref(`/users/${userId}`);
		userRef.on("value", snapshot => setUserName(snapshot.val().name));
		const placeRef = firebase.database().ref(`/places/${placeId}`);
		placeRef.on("value", snapshot => setPlaceName(snapshot.val().name));
	}, [userId, setUserId])
	return (
		<>
			<Container>
				<HeaderContainer>
					<Link to="/profile" state={{ userId }} > <Avatar /></Link>
					<Header>
						<Link to="/profile" state={{ userId }} style={{ textDecoration: 'none', color: '#EFEFEF' }}><StrongText>{userName}</StrongText></Link>
						<Text>il y a {time}</Text>
					</Header>
				</HeaderContainer>
				<Link to="/place"><PlacePhoto /></Link>
				<Link to="/place" style={{ textDecoration: 'none', color: '#EFEFEF' }}><StrongText>{placeName}</StrongText></Link>
				<Text>{description}</Text>
			</Container>
		</>
	)
}