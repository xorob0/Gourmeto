import React from "react"
import styled from "styled-components"
import {MainTitle} from "../components/mainTitle"
import {FormInput} from "../components/formInput"
import background from '../images/background.jpg'
import {MainButton} from "../components/mainButton"
import {LoginLink} from "../components/loginLink" 

const Container = styled.div`
height:1500px;
display: flex;
background: url(${background});
background-size: cover;
box-shadow: inset 0px 10px 250px #000000;
justify-content:center;
`

const InputsContainer = styled.div`
display:flex;
flex-direction:column;
margin-left: 45px;
justify-content:center;
`

const LoginContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin-left: 35px;
`

const LoginChoiceContainer = styled.div`
display:flex;
`

export default () => (
    <>
        <Container>
            <MainTitle />
            <InputsContainer>
                <LoginChoiceContainer>
                    <LoginContainer>
                        <LoginLink contain="S'inscrire"/>
                    </LoginContainer>
                    <LoginContainer>
                        <LoginLink contain="Se connecter"/>
                    </LoginContainer>
                </LoginChoiceContainer>
                <FormInput placeholder="Pseudo"/>
                <FormInput placeholder="E-mail"/>
                <FormInput placeholder="Mot de passe"/>
                <FormInput placeholder="Ville"/>
                <FormInput placeholder="Pays"/>
                <MainButton contain="Inscrivez-vous" />
            </InputsContainer>
        </Container>
    </>
)