import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./components/context/user";
import reportWebVitals from './reportWebVitals';
import { ItemsProvider } from './components/context/items';
import { FoodRequestProvider } from './components/context/foodrequests';

ReactDOM.render(
  <Router>
      <UserProvider> 
        <ItemsProvider>
          <FoodRequestProvider>
              <App />
          </FoodRequestProvider>
        </ItemsProvider>
      </UserProvider>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
