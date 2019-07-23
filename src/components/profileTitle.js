import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const TitleWrapper = styled.div`

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 64px;
line-height: 75px;

color: #EFEFEFEF;`

export const ProfileTitle = ({name}) => {
    return (
        <TitleWrapper>
            <span>{name}</span>
        </TitleWrapper>
    )
} 
