import React from 'react';
import styled from 'styled-components';

import yoga from '../img/exercise.png';
import { MAX } from "../constants";


const Container = styled.div`
  padding: 100px ;
  background-color: #eee;
  flex: 6;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${MAX.MEDIA_M}{
    padding: 0px 50px 90px 50px;
  }

  ${MAX.MEDIA_S}{
    margin-bottom: 60px;
  }
`
const Title = styled.h1`
  margin:10px 10px 30px 0px !important;
`

const ItemYoga = styled.img`
  margin-bottom: 45px;
  width: 400px;
`

const InstaLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: rgb(189, 1, 129);

  &:hover{
  color:#680270;
}
`

const Contact = () => {
    return (
      <Container>
        <Title>What do I do after work ?</Title>
        <ItemYoga src={yoga} alt="Yoga pose"></ItemYoga>
        <p>Follow me on my dedicated
          <InstaLink href="https://www.instagram.com/rinadoyoga/?hl=fr" target="_blank" rel="noopener noreferrer" class="instagram"> Instagram Account!</InstaLink>
        </p>
      </Container >
    )
}

export default Contact