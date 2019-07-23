import React from "react"
import styled from "styled-components"
import {ProfileImage} from '../components/profileImage'
import profileImage from '../images/profile-image-test.jpg';


export default () => (
    <>
        <ProfileImage
            profile_image={profileImage}
        />
    </>
)