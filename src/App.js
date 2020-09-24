import React from 'react';
import { useForm } from 'react-hook-form';
import logo from './logo.svg';
import './App.css';


import Copyright from './components/footer';
import {Like} from './components/like';
import {Dislike} from './components/like';
import {Aboutus} from './components/about';
import {ContactUs} from './components/contactus';
import HomeHeaderMain from './components/homeheadermain';
import Navbar from './components/navBar';
import HomeHeaderSectionAfterNav from './components/home_header_section_after_nav';
import FirstPage from './components/firstpage';
import HomeHeader from './components/homeheader';
import HowItWorks from './components/how_it_works';
import Features from './components/features';
import OurPartners from './components/ourpartners';
import Footer from './components/footer';
import PlaceOrderPage from './components/placeorder';
import Product from './components/productdrop';
import AddToCart from './components/addtocart';
import UnsignedinCustomerDetails from './components/unsignedincustomerdetails';
import PlaceOrderPageSignUp from './components/place_order_page_signup';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
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
    <PlaceOrderPage/>
    <AddToCart/>
    </Route>
    </BrowserRouter>
  )
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
            <form >
              <PlaceOrderPage/>
              
          </form>
          </div>
        </div>
        </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
