import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDCiX9_kFYoatKJB7Idc-K_k2XrkwUs5So",
  authDomain: "gourmeto-6fd67.firebaseapp.com",
  databaseURL: "https://gourmeto-6fd67.firebaseio.com",
  projectId: "gourmeto-6fd67",
  storageBucket: "gourmeto-6fd67.appspot.com",
  messagingSenderId: "208164789511",
  appId: "1:208164789511:web:22745f19a559f32a"
};


  firebase.initializeApp(firebaseConfig)
  
  /*export const googleProvider = new firebase.auth.GoogleAuthProvider()
  export const facebookProvider = new firebase.auth.FacebookAuthProvider()
  export const auth = firebase.auth()*/
  

  /*export const signOut = () => {
    firebase.auth().signOut()
  }*/

  export default firebase
  



