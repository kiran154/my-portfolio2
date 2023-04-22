import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: #222;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

function MyComponent() {
  return (
    <Container>
      <Button>Click me</Button>
    </Container>
  );
}

export default MyComponent;
