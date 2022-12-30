import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "./header";
import App from "./App";
import Card_product from "./card_product";
import Product_des from "./product_des";
import Tabbar from "./tab";






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Header/>


    <App/>

      <Card_product></Card_product>
      <Product_des/>
      <Tabbar></Tabbar>
  </React.StrictMode>








);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
