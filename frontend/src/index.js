import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import axios from 'axios';
const root = document.getElementById('root');
const renderRoot = createRoot(root);

renderRoot.render(<App />);

window.axios = axios;