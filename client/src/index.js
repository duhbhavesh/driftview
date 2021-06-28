import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import './styles.css';

ReactDOM.render(
   <React.StrictMode>
      <DataProvider>
         <AuthProvider>
            <Router>
               <App />
            </Router>
         </AuthProvider>
      </DataProvider>
   </React.StrictMode>,
   document.getElementById('root'),
);
