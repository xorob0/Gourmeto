import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { Link } from "gatsby"

const Button = styled.div`
cursor:pointer;
display: flex;
justify-content: center;
align-items: center;
width: 496px;
height: 58.85px;
background: #C4C4C4;
mix-blend-mode: hard-light;
border: 1.0022px solid #FFFFFF;
backdrop-filter: blur(4.00879px);
border-radius: 7.40084px;
margin-top:30px
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

export const MainButton = ({contain, link}) => {
    return(
        <>          
            <Link to={link} style={{ textDecoration: 'none', color:'#EFEFEF' }}><Button><Text>{contain}</Text></Button></Link>        
        </>
    )
}

