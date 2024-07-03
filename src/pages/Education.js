import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationContainer = styled.div`
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

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Education = () => {
  return (
    <EducationContainer>
      <Title>Chicken Health Education</Title>
      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle>Common Chicken Infections</SectionTitle>
        <p>
          Chickens can be susceptible to various infections, including:
          <ul>
            <li>Avian Influenza</li>
            <li>Newcastle Disease</li>
            <li>Infectious Bronchitis</li>
            <li>Marek's Disease</li>
            <li>Coccidiosis</li>
          </ul>
        </p>
      </Section>
      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SectionTitle>Preventing Chicken Infections</SectionTitle>
        <p>
          To keep your chickens healthy, consider the following practices:
          <ul>
            <li>Maintain a clean and dry coop</li>
            <li>Provide proper nutrition and clean water</li>
            <li>Implement biosecurity measures</li>
            <li>Regularly inspect your flock for signs of illness</li>
            <li>Vaccinate against common diseases</li>
          </ul>
        </p>
      </Section>
    </EducationContainer>
  );
};

export default Education;