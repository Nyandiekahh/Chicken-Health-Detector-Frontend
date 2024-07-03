import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Chicken Health Detector</Title>
    </HeaderContainer>
  );
};

export default Header;