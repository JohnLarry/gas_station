import React from 'react';

const Footer = () => {
return(
	<React.Fragment>
		<footer>
		<div className="footer-style">
			<div className="haykpo">
				<div>
					<h5>Haykpo</h5>
					<p>Here for you. Here to</p>
					<p> stay!</p>
				</div>
				<div> 
					<img src="images/facebook.png"></img>
					<img src="images/twitter.png"></img>
					<img src="images/instagram.png"></img>
					
				</div>
		</div>
		
		
		<div className="footer-product">
			<h5>Products</h5>
			<p>Petrol</p>
			<p>Diesel</p>
			<p>Gas</p >
		</div>
			<div>
				<div className="footer-company">
					<h5>Company</h5>
					<p>About</p>
					<p>Contact</p>
					<p>Terms and conditions</p>
				</div>
				</div>
		</div>
	</footer>

	</React.Fragment>
)
}
		
export default Footer;