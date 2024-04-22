import axios from "axios";
// import dotenv from "dotenv";

// // Load environment variables from .env file
// dotenv.config();

// Create a new Axios instance
const api = axios.create({
  baseURL: "http://localhost:3060/api", // process.env.REACT_APP_API_URL, // Your API base URL
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // You can modify the request config here (e.g., add headers)
    // For example:
    // config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // You can handle the response data here
    return response.data;
  },
  (error) => {
    // You can handle the response error here
    return Promise.reject(error);
  }
);

export default api;
