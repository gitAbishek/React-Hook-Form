import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
 <ChakraProvider>
 <ColorModeScript initialColorMode="dark" />
    <App />
 </ChakraProvider>
 </Router>
);


