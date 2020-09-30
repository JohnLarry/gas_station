import React from 'react';
import { useForm } from 'react-hook-form';
import logo from './logo.svg';
import './App.css';
import Copyright from './components/footer';

import {ContactUs} from './components/contactus';

import HomeHeader from './components/homeheader';
import HowItWorks from './components/how_it_works';
import Features from './components/features';
import OurPartners from './components/ourpartners';
import Footer from './components/footer';
import PlaceOrderPage from './components/placeorder';
import Product from './components/productdrop';

import Fag from "./components/fag";
import UnsignedinCustomerDetails from './components/unsignedincustomerdetails';
import PlaceOrderPageSignUp from './components/place_order_page_signup';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
function Greet(){
  return <h1>Good day </h1>
}


function App() {
  
         
  return (

    <div className="App">

        <BrowserRouter> 
        {/*--Homepage router */}

        <Route path ="/" exact>
          
        <HomeHeader/>
        <HowItWorks/>
        <Features/>
        <OurPartners/>
        <Footer/>

        </Route>
      
        {/*add items and proceed to place order form router*/}
        <Route path ="/order">
        <div className ="product_purchase_bg">
          <div className ="order_form">
           
              <PlaceOrderPage/>
              
        
          </div>
        </div>
        </Route>
        <Route path ="/fag">
        <Fag />
        <Footer/>
        </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
