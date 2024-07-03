import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  background-color: ${props => props.theme.colors.secondary};
  padding: 1rem;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled(motion.li)`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  font-weight: bold;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavLink to="/detect">Detect</NavLink>
        </NavItem>
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavLink to="/education">Education</NavLink>
        </NavItem>
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavLink to="/about">About</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;