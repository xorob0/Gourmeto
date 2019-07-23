import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import BackgroundImage from "gatsby-background-image"
import placeImage from '../images/place-image-test.jpg'

const ReducedImage = styled.div`
    
    width: 360px;
    height: 360px;

    border-radius: 10.6303px;
    background: url(${placeImage});
    background-size: cover;
`


export const PlaceImage = ({placeimage}) => {
    return (
        <ReducedImage />
    )
} 
