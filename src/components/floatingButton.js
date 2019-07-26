import React, { Children } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { Link } from "gatsby"

const Button = styled.div`
position: absolute;
width: 197px;
height: 67px;
left: 2000px;
top: 69px;
cursor:pointer;
display: flex;
justify-content: center;
align-items: center;

background: #C4C4C4;
mix-blend-mode: hard-light;
border: 1px solid #FFFFFF;
backdrop-filter: blur(4px);

border-radius: 4px;
`

const Text = styled.span`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 26.3333px;
line-height: 31px;

color: #FFFFFF;

border-radius: 4px;
`


export const FloatingButton = ({children}) => {
    return(
        <>           
            <Link to="/login" style={{ textDecoration: 'none', color:'#EFEFEF' }}><Button><Text>{children}</Text></Button></Link>           
        </>
    )
}