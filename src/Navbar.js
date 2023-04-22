import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #fff;
  padding: 0 50px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #222;
  text-decoration: none;
`;

const Menu = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  list-style: none;
  margin-left: 20px;
`;

const MenuLink = styled(Link)`
  color: #222;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: #555;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo to="/">My Portfolio</Logo>
      <Menu>
        <MenuItem>
          <MenuLink to="/about">About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/services">Services</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/contact">Contact</MenuLink>
        </MenuItem>
      </Menu>
    </Nav>
  );
}

export default Navbar;
