import React from 'react';
import './App.css';
import HomeHeader from './components/homeheader';


import Footer from './components/footer';
import PlaceOrderPage from './components/placeorder';
import Fag from "./components/fag";
import OrderHistory from "./components/orderhistory";
import {Route, BrowserRouter} from 'react-router-dom';
import Login from "./upzo/login";
import Homev from "./components/home";
import AngleDiv from "./components/anglediv";
function App() {
          
  return (

    <div className="App">

        <BrowserRouter> 
        {/*--Homepage router */}

        <Route path ="/" exact>
         
          
        <HomeHeader/>
       
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
        
         <Route path ="/login">
        <Login/>
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
