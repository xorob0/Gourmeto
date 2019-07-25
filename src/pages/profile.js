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
import { LikesNumber } from "../components/likesNumber";

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


export default () => (
    <>
        <Container>
            <ProfileContainer>
                <ProfileImage
                    profile_image={profileImage}
                />
                <ProfileDataContainer>
                    <ProfileTitle name="William Dupont"/>
                    <ProfilePlace place="Bruxelles, Belgique"/>
                    <ViewsLikesContainer>
                        <ViewsNumber viewsNumber='3' />
                        <LikesNumber likesNumber='105' />
                    </ViewsLikesContainer>
                    <ProfileButton />
                </ProfileDataContainer>
            </ProfileContainer>

            <ViewsList />  
            
        </Container>
    </>
)