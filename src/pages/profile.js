import React from "react"
import styled from "styled-components"
import {ProfileImage} from '../components/profileImage'
import {ProfileTitle} from '../components/profileTitle'
import {ProfilePlace} from '../components/profilePlace'
import {ProfileButton} from '../components/profileButton'
import {ViewsNumber} from '../components/viewsNumber'
import {ViewsList} from '../components/viewsList'
import profileImage from '../images/profile-image-test.jpg'
import background from '../images/background.jpg'
import { LikesNumber } from "../components/likesNumber"
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

const userRef = firebase.database().ref('users/1');
userRef.once("value")
  .then(function(snapshot) {
        var name = snapshot.val().name;
  });

export default () => {
  
    return(
    <>
        <Container>
            <ProfileContainer>
                <ProfileImage
                    profile_image={profileImage}
                />
                <ProfileDataContainer>
                    <ProfileTitle name="Ui"/>
                    <ProfilePlace place="Ui"/>
                    <ViewsLikesContainer>
                        <ViewsNumber viewsNumber="Ui" />
                        <LikesNumber likesNumber="Ui" />
                    </ViewsLikesContainer>
                    <ProfileButton />
                </ProfileDataContainer>
            </ProfileContainer>

            <ViewsList />  
            
        </Container>
    </>
    )
}