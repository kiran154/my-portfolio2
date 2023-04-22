import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const HeroSection = styled.section`
  height: 100vh;
  background-image: url('./img/jonathan-notay-QeQxei33T4g-unsplash.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: black;
  margin-bottom: 20px;
  text-align: center;
`;


function Hero() {
  return (
    <HeroSection>
      <Title>Welcome to My Portfolio</Title>
      <Button label="Github" href="https://github.com/kiran154">Get started</Button>
    </HeroSection>
  );
}

export default Hero;
