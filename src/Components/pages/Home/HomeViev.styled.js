import styled from "styled-components";
import img from '../../Images/contacts.jpg'

export const Container = styled.div` 
display: flex;
justify-content: center;
width: 100%;
height: calc(100vh - 70px);
background: url(${img});
background-size: contain;
background-repeat: no-repeat;
background-attachment: fixed;
  background-position: center; 
`

export const Title = styled.h1` 
display: block;
text-align: center;
max-width: 470px;
margin-top: 100px;
transform: rotate(-5deg);
font-size: 3rem;

`