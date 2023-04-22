import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 100px 50px;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 50px;
  text-align: center;
`;

const ServiceList = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 50px;
`;

const ServiceItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

function Services() {
  const services = [
    {
      title: 'Web Development',
      text: 'I offer professional and modern website development services, utilizing the latest technologies and techniques to deliver a high-quality product.',
      backgroundImage: './img/web5.jpg'
    },
    {
      title: 'Mobile App Development',
      text: 'With my mobile app development services, I can help you create a user-friendly and responsive app that will work seamlessly across all devices and platforms.',
      backgroundImage: './img/web2.jpg'
    },
    {
      title: 'E-commerce Solutions',
      text: 'Need an e-commerce solution for your business? I can help you build an online store that is tailored to your specific needs and provides a great user experience for your customers.',
      backgroundImage: './img/web4.jpg'
    }
  ];
  

  return (
    <ServicesSection>
      <Title>What I Offer</Title>
      <ServiceList>
        {services.map(service => (
          <ServiceItem key={service.title} backgroundImage={service.backgroundImage}>
            
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceText>{service.text}</ServiceText>
          </ServiceItem>
        ))}
      </ServiceList>
    </ServicesSection>
  );
}


// const ServiceIcon = styled.img`
// width: 80px;
// height: 80px;
// margin-bottom: 20px;
// `;

const ServiceTitle = styled.h3`
font-size: 24px;
margin-bottom: 10px;
color: black;
`;

const ServiceText = styled.p`
font-size: 20px;
line-height: 1.5;
color: yellow;
`;



export default Services;
