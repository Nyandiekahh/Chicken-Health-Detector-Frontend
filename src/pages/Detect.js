import React, { useState } from 'react';
import styled from 'styled-components';
import ImageUploader from '../components/ImageUploader';
import ResultDisplay from '../components/ResultDisplay';

const DetectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Detect = () => {
  const [result, setResult] = useState(null);

  const handleDetectionResult = (detectionResult) => {
    setResult(detectionResult);
  };

  return (
    <DetectContainer>
      <Title>Detect Chicken Health</Title>
      <ImageUploader onDetectionResult={handleDetectionResult} />
      {result && <ResultDisplay result={result} />}
    </DetectContainer>
  );
};

export default Detect;