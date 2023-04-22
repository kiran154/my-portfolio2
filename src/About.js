import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: #f9f9f9;
  background-image: url('./img/about me.jpg');
  background-repeat: no-repeat;
  background-size: fill;
  padding: 100px 50px;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 50px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

function About() {
  return (
    <AboutSection>
      <Title>About Me</Title>
      <Text>
  Hello! My name is Kiran Khatiwada and I am a student in my 8th semester of studying Information Management.
  {"\n\n"}
  I am currently undertaking an internship at Cropbytes Solution, where I am gaining valuable experience in the field.
</Text>

 
    </AboutSection>
  );
}

export default About;
