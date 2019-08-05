import React from "react"
import styled from "styled-components"
import {ProfileImage} from '../components/profileImage'
import {FloatingButton} from "../components/floatingButton"
import {ProfileTitle} from '../components/profileTitle'
import {ProfilePlace} from '../components/profilePlace'
import {ProfileButton} from '../components/profileButton'
import {ViewsNumber} from '../components/viewsNumber'
import {ViewsList} from '../components/viewsList'
import profileImage from '../images/profile-image-test.jpg'
import background from '../images/background.jpg'
import { LikesNumber } from "../components/likesNumber"
import {useState, useEffect, useContext} from "react"
import firebase from '../utils/firebase'

const Container = styled.div`
height:1500px;
display: flex;
justify-content: center;
align-items: center;
align-content:center;
flex-direction: column;
background: url(${background});
background-size: cover;
box-shadow: inset 0px 10px 250px #000000;
`
const ProfileDataContainer = styled.div`
diplay:flex;
margin-left: 10px;
align-content:space-between;
`

const ProfileContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

const ViewsLikesContainer = styled.div`
display: flex;
` 

const ProfilePage = ({location}) => {

    const {userId} = location.state;

    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [viewsNumber, setViewsNumber] = useState(0);
    const [likesNumber, setLikesNumber] = useState(0);
    
    useEffect(() => {
        const userRef = firebase.database().ref(`/users/${userId}`);
        userRef.on("value", snapshot => setName(snapshot.val().name))
        userRef.on("value", snapshot => setPlace(snapshot.val().city + ", "+snapshot.val().country))
        userRef.on("value", snapshot => setViewsNumber(snapshot.val().viewsNumber))
        userRef.on("value", snapshot => setLikesNumber(snapshot.val().likesNumber))
    });

    return(
        <>
        <Container>
            <FloatingButton children="Accueil" link="/"></FloatingButton>
            <ProfileContainer>
                <ProfileImage
                    profile_image={profileImage}
                />
                <ProfileDataContainer>
                    <ProfileTitle name={name}/>
                    <ProfilePlace place={place}/>
                    <ViewsLikesContainer>
                        <ViewsNumber viewsNumber={viewsNumber} />
                        <LikesNumber likesNumber={likesNumber} />
                    </ViewsLikesContainer>
                    <ProfileButton />
                </ProfileDataContainer>
            </ProfileContainer>

            <ViewsList /> 
            
        </Container>
        </>
    )
}

export default ProfilePage