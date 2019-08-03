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

export const ViewsList = () => {
    

    return (
        <>
        <ViewsListWrapper>
            <Title>Avis</Title>
            <ViewBoard id="1"/>
            <ViewBoard id="2"/>
        </ViewsListWrapper>
           
        </>
    )
} 