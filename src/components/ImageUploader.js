import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { detectChickenHealth } from '../utils/api';

const UploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const FileInput = styled.input`
  display: none;
`;

const UploadButton = styled(motion.button)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Preview = styled.img`
  max-width: 300px;
  max-height: 300px;
  margin-bottom: 1rem;
`;

const ImageUploader = ({ onDetectionResult }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const result = await detectChickenHealth(selectedFile);
        onDetectionResult(result);
      } catch (error) {
        console.error('Error detecting chicken health:', error);
      }
    }
  };

  return (
    <UploaderContainer>
      <FileInput
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        id="file-input"
      />
      <UploadButton
        as="label"
        htmlFor="file-input"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Select Image
      </UploadButton>
      {preview && <Preview src={preview} alt="Selected chicken" />}
      <UploadButton
        onClick={handleUpload}
        disabled={!selectedFile}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Detect Health
      </UploadButton>
    </UploaderContainer>
  );
};

export default ImageUploader;