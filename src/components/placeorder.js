
import React, {Component} from 'react';

import Product from './productdrop';
import Payment from './paymentone';
import OrderHistory from "./orderhistory";
import ProductSignedIn from "./signedinproductdrops";
import  { VerifyTransaction } from 'react-flutterwave-rave';
import {fuel_price,fuel_quantity,gas_price,diesel_price} from './productprices';
class PlaceOrderPage extends Component {
  constructor(props){
    super(props);
     
  
	this.state ={
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
   signedIn:false,
   paid:false,
	}
  this.callback = this.callback.bind(this);
    this.close = this.close.bind(this);
};

	//payment callback
  callback = (response) => {
    
    return VerifyTransaction({ live: false, txref: response.tx.txRef, SECKEY: "FLWSECK_TEST-690e150e73bd8296a6d00d9439d5d15a-X" })
    .then(function (resp) {
      // console.log(resp);
  var chargeResponse = resp.data.data.flwMeta.chargeResponse;

 
 
  if ((chargeResponse === "00" || chargeResponse === "0")) {
     
   this.setState({paid:true});
    return chargeResponse;      
    //Give Value and return to Success page
  } else {
    
    console.log("Error");
    console.log(resp);}
    })
    .catch(function (error) {
      console.log(error);
    });
    
    
  } 
 
 
  close = () => {
    this.nextStep();
  }
   
	//nextStep function
	nextStep = () => {
		let { count } =this.state;
		this.setState({count:count+=1});

	};
  paid = () => {
    let { paid} =this.state;
    this.setState({paid:!paid});

  };
	//prevStep function
	prevStep = () => {
		let { count } =this.state;
		this.setState({count:count-=1});

	};
  userSignIn =() =>{
    let {signedIn} =this.state;
    this.setState({signedIn:!signedIn});

  }
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
             <ProductSignedIn 
             nextStep = {this.nextStep}
             productInputChange ={this.productInputChange} 
             handleRemoveClick ={this.handleRemoveClick}
             handleAddClick ={this.handleAddClick} myStateData ={this.state}
             shoperPersonalDetailsHandler ={this.shoperPersonalDetailsHandler}
             />
          </div>);
				}

				else{
					return (<div className ="order_form_inner">
             <Product 
             nextStep = {this.nextStep}
             productInputChange ={this.productInputChange} 
             handleRemoveClick ={this.handleRemoveClick}
             handleAddClick ={this.handleAddClick} myStateData ={this.state}
             shoperPersonalDetailsHandler ={this.shoperPersonalDetailsHandler}
             handleSignUpCheckBoxChange ={this.handleSignUpCheckBoxChange}
             userSignIn ={this.userSignIn}/>
            
             
             
          
              </div>);
				}
			
				case 2: return <Payment  
                            callBack ={this.callback} 
                            close ={this.close} 
                            myStateData ={this.state} 
                            backToOrderPage = {this.prevStep}/>;
        case 3: return <OrderHistory   myStateData ={this.state} />;

        default: return ""
			}

            
	}
}




export default PlaceOrderPage;