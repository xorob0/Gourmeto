import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import star from '../images/star-solid.svg'

const Star = styled.img`
    height:50px;
    width:50px;
`;
const Number = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 32px;
line-height: 37px;
color: #EFEFEF;
margin-left: 3px;
margin-top: 8px;
`;

const ViewsMapper = styled.div`
display:flex;
margin-top:10px;
jutify-content:center;
align-content:center;
`;

export const ViewsNumber = ({viewsNumber}) => {
    return(
        <>
            <ViewsMapper>
                <Star src={star} alt="Star"></Star>
                <Number>{viewsNumber} avis</Number>
            </ViewsMapper>
        </>
    )
} 