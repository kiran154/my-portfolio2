import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 16px;
`;

function Footer() {
return (
<FooterSection>
<Text>© 2023 Kiran Khatiwada. All Rights Reserved.</Text>
</FooterSection>
);
}

export default Footer;