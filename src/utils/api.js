import axios from 'axios';

const API_URL = 'YOUR_BACKEND_API_URL';

export const detectChickenHealth = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    const response = await axios.post(`${API_URL}/detect`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error detecting chicken health:', error);
    throw error;
  }
};