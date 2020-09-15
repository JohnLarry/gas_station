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

	const {myStateData} =props;
	const total_price_array = myStateData.products.map((value) =>(value.price));
	
	const total = total_price_array.reduce((val, accVal)=>(val+accVal));
	console.log(total);
	
        const publicKey = 'pk_test_a2b6ae617b67ffe6750e972194feba30d4ac9b7b';
   
    
	
	return(

		<div className ="card">
			
			<div className ="row">
					<div className="col-sm padit"> <h2> Price summary </h2>
					 <br/>
					 <h4> ` 20Ltrs of fuel - N12345` </h4>
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

         <p>
              <PaystackButton
                text="Make Payment"
                class="payButton"
                callback={callback}
                close={close}
                reference={getReference()}
                email={myStateData.email}
                amount={total}
                paystackkey={publicKey}
              />
            </p>
       
            </div>
			 </div> 
		 </div>);
}