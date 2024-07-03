import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ResultContainer = styled(motion.div)`
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const ResultTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ResultText = styled.p`
  margin-bottom: 0.5rem;
`;

const ResultDisplay = ({ result }) => {
  return (
    <ResultContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ResultTitle>Detection Result</ResultTitle>
      <ResultText>
        <strong>Is Chicken:</strong> {result.isChicken ? 'Yes' : 'No'}
      </ResultText>
      {result.isChicken && (
        <>
          <ResultText>
            <strong>Is Infected:</strong> {result.isInfected ? 'Yes' : 'No'}
          </ResultText>
          {result.isInfected && (
            <>
              <ResultText>
                <strong>Infection Type:</strong> {result.infectionType}
              </ResultText>
              <ResultText>
                <strong>Description:</strong> {result.description}
              </ResultText>
            </>
          )}
        </>
      )}
    </ResultContainer>
  );
};

export default ResultDisplay;