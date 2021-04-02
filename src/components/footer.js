import React from 'react';

const Footer = () => {
return(
	<React.Fragment>
		<div className ="row footerTop">

		
			<div className="col smallMargin ">
				<div >
					<h5>Haykpo</h5>
					<p>Here for you. Here to</p>
					<p> stay!</p>
				</div>
				<div className ="social-div"> 
					<img src="images/facebook.png" alt ="facebook logo"/>	
					<img src="images/twitter.png" alt ="twitter logo"/>
					<img src="images/instagram.png" alt = "instagram logo"/>
					
				</div>
			</div>
		
		
			<div className="col">
					<h4>Products</h4>
					<p>Petrol</p>
					<p>Diesel</p>
					<p>Gas</p >
			</div>
			
			<div className=" col">
					<h3>Company</h3>
					<p>About</p>
					<p>Contact</p>
					<p>Our terms and conditions</p>
			</div>
		
	</div>

	</React.Fragment>
)
}
		
export default Footer;