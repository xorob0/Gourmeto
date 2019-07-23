import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const PlaceWrapper = styled.div`
 
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 37px;
    
    color: #EFEFEF;
`

export const ProfilePlace = ({place}) => {
    return (
        <PlaceWrapper>
           <span>{place}</span> 
        </PlaceWrapper>
    )
} 