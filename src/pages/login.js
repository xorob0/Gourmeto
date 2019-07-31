import React from "react"
import { useEffect } from "react"
import firebase from '../utils/firebase'
import styled from "styled-components"
import {MainTitle} from "../components/mainTitle"
import {FormInput} from "../components/formInput"
import background from '../images/background.jpg'
import {MainButton} from "../components/mainButton"
import {LoginLink} from "../components/loginLink" 
import {FloatingButton} from "../components/floatingButton"
import {SpecialButton} from "../components/specialButton"
import googleBrand from "../images/google-brands.svg"
import facebookBrand from "../images/facebook-brands.svg"
import { createContext } from "vm";

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

const IndexPage = () => {

    return(
        <Container>
        <FloatingButton children="Accueil" link="/"></FloatingButton>
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
                <FormInput placeholder="E-mail"/>
                <FormInput placeholder="Mot de passe"/>
                <MainButton contain="Connectez-vous" link="/"/>
                <SpecialButton contain="Connectez-vous avec Google" icon={googleBrand}/>
                <SpecialButton contain="Connectez-vous avec Facebook" icon={facebookBrand}/>
            </InputsContainer>
        </Container>
    )
}

export default IndexPage