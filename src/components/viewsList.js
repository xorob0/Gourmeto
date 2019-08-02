import React from "react"
import styled from 'styled-components'
import {ViewBoard} from '../components/viewBoard'
import {useState, useEffect} from "react"
import firebase from "../utils/firebase"

const Title = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 51.6px;
line-height: 60px;
margin-top: 200px;
color: #EFEFEF;
margin-bottom: 20px;
`;

const View = styled.div`
width: 687px;
height: 355.26px;
background: #EFEFEF;
border-radius: 6.18919px;
`;

const ViewsListWrapper = styled.div`
    display:flex;
    flex-direction:column;
`;

export const ViewsList = ({id}) => {
    
    const [userId, setUserId] = useState(1);
    const [userName, setUserName] = useState("");
    const [placeName, setPlaceName] = useState("");
    const [placeId, setPlaceId] = useState(1);
    const [time, setTime] = useState("00:00:00");
    const [description, setDescription] = useState("");


    useEffect(() => {
        const viewRef = firebase.database().ref(`/views/${id}`);
        viewRef.on("value", snapshot => setUserId(snapshot.val().userId))
        viewRef.on("value", snapshot => setPlaceId(snapshot.val().placeId))
        viewRef.on("value", snapshot => setTime(snapshot.val().time))
        viewRef.on("value", snapshot => setDescription(snapshot.val().description))

        console.log(`/users/${userId}`);
        const userRef = firebase.database().ref(`/users/${userId}`);
        userRef.on("value", snapshot => setUserName(snapshot.val().name));
        const placeRef = firebase.database().ref(`/places/${placeId}`);
        placeRef.on("value", snapshot => setPlaceName(snapshot.val().name));
    })

    return (
        <>
        <ViewsListWrapper>
            <Title>Avis</Title>
            <ViewBoard name={userName} time={time} place={placeName} description={description}/>
        </ViewsListWrapper>
           
        </>
    )
} 