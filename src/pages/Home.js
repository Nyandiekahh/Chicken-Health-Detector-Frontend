import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedChicken from '../components/AnimatedChicken';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const FeatureList = styled(motion.ul)`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const FeatureItem = styled(motion.li)`
  background-color: ${props => props.theme.colors.white};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
`;

const Home = () => {
  const features = [
    "AI-powered detection",
    "Fast results",
    "Easy to use",
    "Educational resources",
  ];

  return (
    <HomeContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Chicken Health Detector
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Detect and prevent chicken infections with our state-of-the-art AI technology.
      </Subtitle>
      <AnimatedChicken />
      <FeatureList>
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          >
            {feature}
          </FeatureItem>
        ))}
      </FeatureList>
    </HomeContainer>
  );
};

export default Home;