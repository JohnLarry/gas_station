import React, {Component} from 'react';

import Product from './productdrop';
import AddToCart from './addtocart';
import UnsignedinCustomerDetails from './unsignedincustomerdetails';
import PlaceOrderPageSignUp from './place_order_page_signup';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {fuel_price,fuel_quantity,gas_price,gas_quantity,diesel_price,diesel_quantity} from './products_dropdown';
class PlaceOrderPage extends Component {
	state ={
		count:1,
		products:[{ product:"fuel",
                    price:fuel_price,
                    quantity:fuel_quantity },],
         fullName:"",
         email:"",
         phoneNumber:"",
         deliveryAddress:"",
         zone:"",
         checked:false,
         password:"",
         confirmPassword:"",
         signedIn:false
	};
	

	//nextStep function
	nextStep = () => {
		const { count } =this.state;
		this.setState({count:count+=1});

	};
	//prevStep function
	prevStep = () => {
		const { count } =this.state;
		this.setState({count:count-=1});

	};
	//product input change handler
	productInputChange =(e,index) =>{
		const {name, value}  =e.target;
		const listOfProductsAdded = [...this.state.products];
		listOfProductsAdded[index][name] =value;
		if(name ==='product'){
      if( value ==='fuel'){
      
        listOfProductsAdded[index]['price'] = fuel_price;
        listOfProductsAdded[index]['quantity'] = fuel_price/150;
      }
     else if( value ==='gas'){
        
        listOfProductsAdded[index]['price'] = gas_price;
        listOfProductsAdded[index]['quantity'] = gas_price/350;
      }
      else{
        
        listOfProductsAdded[index]['price'] = diesel_price;
        listOfProductsAdded[index]['quantity'] = diesel_price/200;
      }
      

    }
    // change price as product quantity changes
    else if(name ==='quantity'){

      if(listOfProductsAdded[index]['product'] === 'fuel'){
        listOfProductsAdded[index]['price'] = value * fuel_price;
      }
      else if(listOfProductsAdded[index]['product'] === 'gas'){
        listOfProductsAdded[index]['price'] = value * gas_price;
      }
      else {
        listOfProductsAdded[index]['price'] = value * diesel_price;
      }
        
    }
    else{
      if(listOfProductsAdded[index]['product'] === 'fuel'){
        listOfProductsAdded[index]['quantity'] = value / fuel_price;
      }
      else if(listOfProductsAdded[index]['product'] === 'gas'){
        listOfProductsAdded[index]['quantity'] = value / gas_price;
      }
      else {
        listOfProductsAdded[index]['quantity'] = value / diesel_price;
      }

    }
		this.setState({products:listOfProductsAdded});

	};
	//shoper prsonal detail handler
	shoperPersonalDetailsHandler = (e) =>{
		const {name, value} = e.target;
		console.log(name);
		this.setState({[name]:value});

	};
	 // handle click event of the Remove button
	
   handleRemoveClick = index => {
    const list = [...this.state.products];
    list.splice(index, 1);
     this.setState({products:list});

  };
  // handle click event of the Add button
  handleAddClick = () => {
  
  	const list = [...this.state.products,{product:"fuel",price:fuel_price,quantity:fuel_quantity},];
  		
    this.setState({products:list});
    console.log(this.state.products);

  };

	  
	//Signup checkbox handler
	handleSignUpCheckBoxChange = () =>{
		this.setState({checked:!this.state.checked});
	};
	render(){
		const {count, signedIn} =this.state;
		
		

		
			switch(count){
				case 1: if(signedIn){
					return(
			<div className ="order_form_inner">
             <Product  productInputChange ={this.
             productInputChange} handleRemoveClick ={this.handleRemoveClick}
             handleAddClick ={this.handleAddClick} myStateData ={this.state}/>
             <UnsignedinCustomerDetails shoperPersonalDetailsHandler ={this.shoperPersonalDetailsHandler}/>
             
          </div>);
				}

				else{
					return (<div className ="order_form_inner">
             <Product productInputChange ={this.
             productInputChange} handleRemoveClick ={this.handleRemoveClick}
             handleAddClick ={this.handleAddClick} myStateData ={this.state}
             />
             <UnsignedinCustomerDetails shoperPersonalDetailsHandler ={this.shoperPersonalDetailsHandler}/>
             <PlaceOrderPageSignUp myStateData ={this.state} handleSignUpCheckBoxChange ={this.handleSignUpCheckBoxChange} shoperPersonalDetailsHandler ={this.shoperPersonalDetailsHandler}/>
          
              </div>);
				}
			
				case 2: return ("Payment page");
			}

            
	}
}




export default PlaceOrderPage;