import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import profileImage from '../images/profile-image-test.jpg'

const ReducedImage = styled.div`
    
    width: 280px;
    height: 280px;

    border-radius: 10.6303px;
    background: url(${profileImage});
    background-size: cover;
`


export const ProfileImage = ({profile_image}) => {
    return (
        <ReducedImage />
    )
} 

