import React from "react"
import styled from "styled-components"
import background from '../images/background.jpg'
import {ViewsNumber} from '../components/viewsNumber'
import {PlaceImage} from '../components/placeImage'
import {ProfileTitle} from '../components/profileTitle'
import {ProfilePlace} from '../components/profilePlace'
import {FloatingButton} from "../components/floatingButton"
import {ViewsList} from '../components/viewsList'
import placeImage from '../images/place-image-test.jpg'
import firebase from '../utils/firebase'
import {useState, useEffect} from "react"

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

const PlacePage = () => {

    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [viewsNumber, setViewsNumber] = useState(0);
    
    useEffect(() => {
        const userRef = firebase.database().ref("/places/1");
        userRef.on("value", snapshot => setName(snapshot.val().name))
        userRef.on("value", snapshot => setPlace(snapshot.val().city + ", "+snapshot.val().country))
        userRef.on("value", snapshot => setViewsNumber(snapshot.val().viewsNumber))
    });


    return(
    <>
        <Container>
            <FloatingButton children="Accueil" link="/"></FloatingButton>
            <PlaceContainer>
                <PlaceImage
                        place_image={placeImage}
                />
                <PlaceDataContainer>
                    <ProfileTitle name={name}/>
                    <ProfilePlace place={place}/>
                    <ViewsNumber viewsNumber={viewsNumber} />
                </PlaceDataContainer>
            </PlaceContainer>

            <ViewsList />
            
        </Container>
    </>
    )
}

export default PlacePage