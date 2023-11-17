import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { RequestProvider } from 'react-request-hook';
import axios from 'axios';
import './components/Styles.css';

// Create an Axios instance with the base URL of your API
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/'
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Create the root once

// Use root.render() without passing the container again
root.render(
  <RequestProvider value={axiosInstance}>
    <App />
  </RequestProvider>
);
