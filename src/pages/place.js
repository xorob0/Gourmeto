import React from "react"
import styled from "styled-components"
import background from '../images/background.jpg'
import {ViewsNumber} from '../components/viewsNumber'
import {PlaceImage} from '../components/placeImage'
import {ProfileTitle} from '../components/profileTitle'
import {ProfilePlace} from '../components/profilePlace'
import {ViewsList} from '../components/viewsList'
import placeImage from '../images/place-image-test.jpg'

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

const PlaceContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

const PlaceDataContainer = styled.div`
diplay:flex;
margin-left: 10px;
align-content:space-between;
`

export default () => (
    <>
        <Container>
            <PlaceContainer>
                <PlaceImage
                        place_image={placeImage}
                />
                <PlaceDataContainer>
                    <ProfileTitle name="La Lorgnette"/>
                    <ProfilePlace place="Mons, Belgique" />
                    <ViewsNumber viewsNumber='305' />
                </PlaceDataContainer>
            </PlaceContainer>

            <ViewsList />
            
        </Container>
    </>
)