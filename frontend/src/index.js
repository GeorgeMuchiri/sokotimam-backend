import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Cart from './components/Cart'
import Search from './components/Search';
import Product from './components/Product';
import Account from './components/Account';
import Dash from './components/Dash';
import Merchant from './components/Merchant';
import Inventory from './components/Inventory';

const apiclient = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql/',
});



ReactDOM.render(
  
  <React.StrictMode>
    <ApolloProvider client={apiclient}>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/account" element={<Account />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/dashboard" element={<Dash />} />
        <Route path="/merchant" element={<Merchant />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

