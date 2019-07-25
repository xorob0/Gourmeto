import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

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
`

const Highlighting = styled.div`
background: #C4C4C4;
border-radius: 12.069px;
width: 146px;
height: 12px;
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
    if(contain === 'S\'inscrire'){
        return(
            <>
                <LoginContainer>
                    <TextSubscriptionWrapper>
                        {contain}
                    </TextSubscriptionWrapper>
                    <Highlighting />
                </LoginContainer>
                
            </>
        )
    }
    else{
        return(
            <>
                <LoginContainer>
                    <TextLoginWrapper>
                        {contain}
                    </TextLoginWrapper>
                    <TransparentHighlighting />
                </LoginContainer>
            </>
        )
    }
}