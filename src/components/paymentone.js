import React, { Component } from "react";
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
    

      const callback = (response) => {
    		console.log(response); // card charged successfully, get reference here
    	}
    	const close = () => {
    		console.log("Payment closed");
    	}
    	const getReference = () => {
    		//you can put any unique reference implementation code here
    		let text = "";
    		let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";
    
    		for( let i=0; i < 15; i++ )
    			text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    		return text;
    	}
export default function Payment(props){

	const {myStateData} = props;
    const {backToOrderPage} = props;
	const total_price_array = myStateData.products.map((value) =>(value.price));
	
	const total = total_price_array.reduce((val, accVal)=>(val+accVal));
	console.log(total);
	
        const publicKey = 'testkeyisfake';
   
    
	
	return(

		<div className ="card">
			
			<div className ="row">
					<div className="col-sm padit"> <h2> Price summary </h2>
					 <br/>
					 
					 <br/>
					 <br/>
					 { myStateData.products.map((value, index)=>(
					 	<h4 key ={index}>{value.quantity}{ value.product ===("fuel"||"diesel") && "Ltrs"} of {value.product} - N{value.price}  </h4>
					 ))}
					 <br/>
					 <h2>  Total  - N {total} </h2>
					 <br/>


					 </div>
					<div className="col-sm"> 

         <p >
              <PaystackButton
                text="Make Payment"
                className ="btn btn-primary backToHome"
                callback={callback}
                close={close}
                reference={getReference()}
                email={myStateData.email}
                amount={total}
                paystackkey={publicKey}
              />
            </p>
              <button className ="btn btn-secondary" onClick ={backToOrderPage}> Edit order</button>
            </div>
			 </div> 

		 </div>);
}