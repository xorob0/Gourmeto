import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const ButtonWrapper = styled.div`

display: flex;
background: #C4C4C4;
mix-blend-mode: hard-light;
border: 1.0022px solid #FFFFFF;
backdrop-filter: blur(4.00879px);
justify-content:center;
border-radius: 7.40084px;
padding:15px;
margin-top:20px;
cursor:pointer;
`

const TextWrapper = styled.span`

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 26.3912px;
line-height: 31px;

color: #000000;
`


export const ProfileButton = () => {
    return (
        <ButtonWrapper>
           <TextWrapper>Modifier le profil</TextWrapper> 
        </ButtonWrapper>
    )
} 