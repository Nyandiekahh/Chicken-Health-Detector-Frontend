import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Section = styled(motion.div)`
  margin-bottom: 2rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About Chicken Health Detector</Title>
      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>
          Chicken Health Detector is an innovative AI-powered tool designed to help poultry farmers and chicken enthusiasts quickly identify potential health issues in their flocks. Our advanced machine learning model analyzes images of chickens to detect signs of infection and provide valuable insights into chicken health.
        </p>
      </Section>
      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3>Our Mission</h3>
        <p>
          Our mission is to improve the well-being of chickens worldwide by providing accessible and accurate health detection tools. By combining cutting-edge technology with expert knowledge in poultry health, we aim to empower farmers and chicken owners to take proactive measures in maintaining the health of their flocks.
        </p>
      </Section>
    </AboutContainer>
  );
};

export default About;