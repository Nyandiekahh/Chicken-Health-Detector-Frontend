// src/utils/api.js
import chickenIllnesses from './chickenIllnesses';
import infectionTypes from './infectionTypes';

export const detectChickenHealth = async (image) => {
  // Simulate an API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Randomly select a chicken illness
  const randomIllness = chickenIllnesses[Math.floor(Math.random() * chickenIllnesses.length)];

  // Randomly select an infection type
  const randomInfectionType = infectionTypes[Math.floor(Math.random() * infectionTypes.length)];

  return {
    isChicken: true,
    isInfected: true,
    infectionType: randomInfectionType,
    ...randomIllness,
  };
};
