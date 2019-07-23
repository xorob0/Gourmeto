import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const reducedImage = styled.img`
    width: 50px;    
    height: 50px;
`


export const ProfileImage = ({profile_image}) => {
    return <img src={profile_image} alt="Photo de profil"/>
} 

