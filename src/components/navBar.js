import React  from  'react';
import { Link } from 'react-router-dom';

const  Navbar = () =>{
    return(
		<div className="nav-container">
		<div className="wrapper">
			
			
			<nav>
	
				<div className="logo">
					<img src="images/logo.svg"/>
				
	
				</div>
				<ul className="nav-items">
					<Link  to ="/order" ><li className="navhome">Home</li></Link>
					<Link  to ="/order" ><li className="navabout" >About </li></Link>
					<Link  to ="/order" ><li className="navfag">  FAQ </li></Link>
					<Link  to ="/order" > <li className="navcontact" >Contact </li> </Link>
				
				
					<Link className="partner-signin" to ="/order" > <li>  Partner Sign In </li></Link>
			
					<Link  className="customer-signin" to = "/order" > <li>Customer Sign In </li></Link>
				</ul>
			</nav>
		</div>
	</div>
    )
    
}
export default Navbar;
