import React from "react";
import Rave  from 'react-flutterwave-rave';
   
  

export default function Payment(props){


	const {myStateData} = props;
	 const {callback} = props;
    const {close} = props;
    
    
    const {backToOrderPage} = props;
	const total_price_array = myStateData.products.map((value) =>(value.price));
	
	const total = total_price_array.reduce((val, accVal)=>(val+accVal));

	
        const public_key = "FLWPUBK_TEST-e1b726cf02f3bc077604f9c5b39d0e65-X";
   
    
	
	return(

		<div className ="card">
			
			<div className ="row">
					<div className="col-sm -4 padit"> <h2> Price summary </h2>
					 <br/>
					 
					 <br/>
					 <br/>
					 { myStateData.products.map((value, index)=>(
					 	<h4 key ={index}>{value.quantity}{ value.product ===("fuel"||"diesel") && "Ltrs"} of {value.product} - N{value.price}  </h4>
					 ))}
					 <br/>
					 <h2>  Total  - N {total} </h2>
					 <br/>


					

         
              <button className ="btn btn-secondary smallMarginRight" 
              onClick ={backToOrderPage}> Edit order</button>
           <Rave className="btn btn-primary"
          pay_button_text="Continue to payment"
          class="button btn btn-primary"
          metadata={[
            { metaname: 'Name', metavalue: myStateData.fullName },
            { metaname: 'Zone', metavalue: myStateData.zone},
            { metaname: 'Address', metavalue: myStateData.deliveryAddress},
             { metaname: 'Phone_Number', metavalue: myStateData.phoneNumber}
          ]}
          payment_method="card"
          customer_email={myStateData.email}
          customer_phone={myStateData.phoneNumber}
          amount={"" + total + ""}
          ravePubKey={public_key}
          callback={callback}
          onclose={close} />
</div>
			 </div> 

		 </div>);
}