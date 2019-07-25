import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const Input = styled.input`
width: 495.5px;
height: 79px;
background: #EFEFEF;
padding: 10px;
border-radius: 219.444px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 26.3333px;
line-height: 31px;
margin-top: 25px;
color: #000000;
`

export const FormInput = ({placeholder}) => {
    return(
        <>
            <Input placeholder={placeholder}/>
        </>
    )
}