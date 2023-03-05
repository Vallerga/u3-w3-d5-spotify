import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';


import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <Provider store={store}>
  <PersistGate persistor={persistor}>
    <App />
  </PersistGate>
</Provider>
);