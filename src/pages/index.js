import React, {useState, useEffect, useContext} from "react"
import firebase from '../utils/firebase'

import Layout from "../components/layout"
import Image from "../components/image"
import {FloatingButton} from "../components/floatingButton"
import {MainTitle} from "../components/mainTitle"
import { SearchBar } from '../components/searchBar'
import {ViewsList} from '../components/viewsList'
import background from '../images/background.jpg'
import styled from 'styled-components'

const Container = styled.div`
height:1500px;
display: flex;
background: url(${background});
background-size: cover;
box-shadow: inset 0px 10px 250px #000000;
justify-content: center;
align-items: center;
flex-direction: column;
`
const TitleSearchBarContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`

const IndexPage = () => {
 
  /*On va charger un state basé sur la base de données à laquelle on s'est connectée */
  //const view = {name:' yyy'}

  
  /*const ref = firebase.database().ref('users/1')
  ref.on("value", snapshot => console.log(snapshot.val()))*/

  //ref.update({name: 'ttt'})*/


  return(
  <>
    <Container>
      <FloatingButton children="Se connecter" link="/login"></FloatingButton>
      <TitleSearchBarContainer>
        <MainTitle />
        <SearchBar />
      </TitleSearchBarContainer>
      <ViewsList id="1"/>
    </Container>
  </>
)
}


export default IndexPage
