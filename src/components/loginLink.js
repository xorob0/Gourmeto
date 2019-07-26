import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { Link } from "gatsby"



const TextSubscriptionWrapper = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 35.8333px;
line-height: 42px;
display:flex;
justify-content: center;
align-items:center;
color: #FFFFFF;
width: 142px;
height: 43px;
cursor:pointer;
`

const TextLoginWrapper = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 35.8333px;
line-height: 42px;
display:flex;
justify-content: center;
align-items:center;
color: #FFFFFF;
width: 210.22px;
height: 43px;
cursor:pointer;
`

const Highlighting = styled.div`
background: #C4C4C4;
border-radius: 12.069px;
width: 146px;
height: 12px;
`

const HighlightingTwo = styled.div`
background: #C4C4C4;
border-radius: 12.069px;
width: 210px;
height: 12.07px;
`

const TransparentHighlighting = styled.div`
background: #C4C4C4;
border-radius: 12.069px;
width: 146px;
height: 12px;
visibility: hidden;
`

const LoginContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`

export const LoginLink = ({contain}) => {
    if(contain === 'S\'inscrire' && window.location.pathname == "/subscription"){
        return(
            <>
                <LoginContainer>
                    <TextSubscriptionWrapper>
                        <Link to="/subscription" style={{ textDecoration: 'none', color: '#EFEFEF' }}>{contain}</Link>
                    </TextSubscriptionWrapper>
                    <Highlighting />
                </LoginContainer>
                
            </>
        )
    }
    else if(contain === 'Se connecter' && window.location.pathname == "/subscription"){
        return(
            <>
                <LoginContainer>
                    <TextLoginWrapper>
                        <Link to="/login" style={{ textDecoration: 'none', color:'#EFEFEF' }}>{contain}</Link>
                    </TextLoginWrapper>
                    <TransparentHighlighting />
                </LoginContainer>
            </>
        )
    }
    else if(contain === 'S\'inscrire' && window.location.pathname == "/login"){
        return(
            <>
                <LoginContainer>
                    <TextLoginWrapper>
                    <Link to="/subscription" style={{ textDecoration: 'none', color: '#EFEFEF' }}>{contain}</Link>
                    </TextLoginWrapper>
                    <TransparentHighlighting />
                </LoginContainer>
            </>
        )
    }
    else{
        return(
            <>
                <LoginContainer>
                    <TextLoginWrapper>
                        <Link to="/login" style={{ textDecoration: 'none', color: '#EFEFEF' }}>{contain}</Link>
                    </TextLoginWrapper>
                    <HighlightingTwo />
                </LoginContainer>
            </>
        )
    }
}