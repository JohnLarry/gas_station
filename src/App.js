import React from 'react';
import logo from './logo.svg';
import './App.css';

import Copyright from './components/footer';
import {Like} from './components/like';
import {Dislike} from './components/like';
import {Aboutus} from './components/about';
import {ContactUs} from './components/contactus';
import Navbar from './components/navBar';
import FirstPage from './components/firstpage';
import HomeHeader from './components/homeheader';
import HowItWorks from './components/how_it_works';
import Features from './components/features';
import OurPartners from './components/ourpartners';
import Footer from './components/footer';
import PlaceOrder from './components/placeorder';
import Product from './components/products_dropdown';
import AddToCart from './components/addtocart';
import UnsignedinCustomerDetails from './components/unsignedincustomerdetails';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
function Greet(){
  return <h1>Good day </h1>
}

function createAlert (){
    alert('hello  clicker');
  }
const Navigator =() =>{
  return(
    <BrowserRouter>
    <Route path ="/" component ={App}></Route>
    <Route path ='/placeorder'> 
    <PlaceOrder/>
    <AddToCart/>
    </Route>
    </BrowserRouter>
  )
}
function App() {
  return (

    <div className="App">

        <BrowserRouter> 
        <Route path ="/" exact>
        <HomeHeader/>
      
        <HowItWorks/>
        <Features/>
        <OurPartners/>
        <Footer/>

        </Route>
        <Route path ="/order">
          <div className ="order_form">
            <div className ="order_form_inner">
              <Product/>
              <AddToCart/>
              <UnsignedinCustomerDetails/>
          </div>
          </div>
        </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
