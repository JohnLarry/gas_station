import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";



export default function OrderHistory(props){
	 const {myStateData} =props;
	 const total_price_array2 = myStateData.products.map((value) =>(value.price));
	
	const total2 = total_price_array2.reduce((val, accVal)=>(val+accVal));


	return( 
		<div> 
		<Router>

		<ul className="nav nav-tabs">
			  <li className="nav-item">
			    <Link className="nav-link " to ="/order">Your Recent Order</Link>
			  </li>
			 
 
  		</ul>
  		<Route path ="/order">
  		
  			<div> 
  		{myStateData.paid && < p className ="order-success"> Your order was successfull</p> }
  		{!myStateData.paid && <p className ="order-fail"> Your order failed</p> }
  		</div>
  		
					<div className ="card">
			
			<div >

					
					 <div className="order-summary"><h3>Product</h3> <h3>Quantity</h3> <h3>Amount </h3></div>
					 { myStateData.products.map((value, index)=>(
					 	<div className="order-summary">
					 	<h3>{value.product}</h3><h3>{value.quantity}</h3> <h3>N{value.price}</h3></div>
					 	
					 ))}
					 <br/>
					 <h2>  Total  - N {total2} </h2>
					 <br/></div></div>


  		</Route>
  		<Route path ="/order-history" exact>

  		<div> Your past orders will show here 
  		 Comming soon
  		</div>

  		</Route>
  		

		</Router>	
		<Link to ="/" className ="haykpo-btn">Back to home</Link>
		
		</div>
		);


}