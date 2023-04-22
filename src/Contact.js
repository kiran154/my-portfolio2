import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ContactSection = styled.section`
  background-color: #f9f9f9;
  background-image: url('./img/about me.jpg');
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 50px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 18px;
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const TextArea = styled.textarea`
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  height: 150px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

function Contact() {
  return (
    <ContactSection>
      <Title>Contact Me</Title>
      <Form>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" pattern="[A-Za-z]+" required />

        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" required />

        <Label htmlFor="message">Message</Label>
        <TextArea id="message" required />

        <Button label="Submit">Send Message</Button>
      </Form>
    </ContactSection>
  );
}


export default Contact;
