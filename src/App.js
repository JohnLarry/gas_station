import React from 'react';
import './App.css';
import HomeHeader from './components/homeheader';
import HowItWorks from './components/how_it_works';
import Features from './components/features';
import OurPartners from './components/ourpartners';
import Footer from './components/footer';
import PlaceOrderPage from './components/placeorder';
import Fag from "./components/fag";
import {Route, BrowserRouter} from 'react-router-dom';
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
