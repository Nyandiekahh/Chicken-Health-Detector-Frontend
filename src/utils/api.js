import axios from 'axios';

const API_URL = 'YOUR_BACKEND_API_URL';

export const detectChickenHealth = async (input) => {
  try {
    let response;
    if (typeof input === 'string') {
      // It's a URL
      response = await axios.post(`${API_URL}/detect`, { url: input });
    } else {
      // It's a file
      const formData = new FormData();
      formData.append('image', input);
      response = await axios.post(`${API_URL}/detect`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }
    return response.data;
  } catch (error) {
    console.error('Error detecting chicken health:', error);
    throw error;
  }
};