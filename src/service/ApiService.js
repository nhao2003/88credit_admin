import axios from 'axios';

const isProduction = true; // Change this to true when you are ready to deploy
const devURL = 'http://localhost:8000/api/v1/admin';
const prodURL = 'https://eight8credit.onrender.com/api/v1/admin';
const API_BASE_URL = isProduction ? prodURL : devURL;

// Creating an instance of Axios with custom configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define your API service functions
const ApiService = {
  // Example function to fetch data from the API
  get: async (url) => {
    try {
      const response = await api.get(`/${url}`);
      console.log('data from API service helper:', response.data);
      return response.data;
    } catch (error) {
      // Handle error
      console.error('Error while fetching data:', error);
      throw error;
    }
  },

  // Example function to send data to the API
  post: async ({ url, data }) => {
    try {
      const response = await api.post(`/${url}`, data);
      const result = response.data;
      console.log('data from API service helper:', response);
      return result;
    } catch (error) {
      // Handle error
      console.error('Error while sending data:', error);
      throw error;
    }
  },
  patch: async ({ url, data }) => {
    try {
      const response = await api.patch(`/${url}`, data);
      const result = response.data;
      console.log('data from API service helper:', response);
      return result;
    } catch (error) {
      // Handle error
      console.error('Error while sending data:', error);
      throw error;
    }
  },
  delete: async ({ url }) => {
    try {
      const response = await api.delete(`/${url}`);
      const result = response.data;
      console.log('data from API service helper:', response);
      return result;
    } catch (error) {
      // Handle error
      console.error('Error while sending data:', error);
      throw error;
    }
  },
};

export default ApiService;
