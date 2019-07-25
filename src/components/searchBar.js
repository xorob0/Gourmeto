import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";

const Input = styled.input`
background: #EFEFEF;
border-radius: 219.444px;
width: 673px;
height: 79px;
padding: 10px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 26.3333px;
line-height: 31px;
margin-left: 70px;
color: #000000;
`

export const SearchBar = () => {
    return(
        <>
           <Input placeholder="Rechercher un restaurant, un café,..."/>
        </>
    )
}