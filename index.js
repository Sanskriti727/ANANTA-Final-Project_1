// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Get the main container from your public/index.html file
const container = document.getElementById('root');
const root = createRoot(container);

// Render your main application component
root.render(<App />);
