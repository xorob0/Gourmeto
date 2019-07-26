import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import profileImage from '../images/profile-image-test.jpg'
import placeImage from '../images/place-image-test.jpg'
import { Link } from "gatsby"

const Container = styled.div`
display: flex;
flex-direction:column;
padding:15px;
width: 555px;
height: 450px;
background: #EFEFEF;
border-radius: 5px;
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

export const ViewBoard = ({name, time, place, description}) => {
    return(
        <>
            <Container>
                <HeaderContainer>
                    <Link to="/profile"><Avatar /></Link>
                    <Header>
                        <Link to="/profile" style={{ textDecoration: 'none', color: '#EFEFEF' }}><StrongText>{name}</StrongText></Link>
                        <Text>il y a {time}</Text>
                    </Header>
                </HeaderContainer>
                <Link to="/place"><PlacePhoto /></Link>
                <Link to="/place" style={{ textDecoration: 'none', color: '#EFEFEF' }}><StrongText>{place}</StrongText></Link>
                <Text>{description}</Text>
            </Container>
        </>
    )
}