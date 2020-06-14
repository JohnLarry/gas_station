import React  from  'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'


const  Navbar = () =>{
    return(
        <div class="nav-container">
	<div class="wrapper">
		
		
		<nav>

			<div class="logo">
				<img src="images/logo.svg"></img>
			 

			</div>
			<ul class="nav-items">
			<li><a class="navhome" href="#">Home</a></li>
			<li><a class="navabout" href="#"> About </a></li>
			<li> <a class="navfag" href="#"> FAQ </a></li>
			<li> <a class="navcontact" href="#">Contact </a></li>
			
			
			<li> <a class="partner-signin" href="#" > Partner Sign In </a></li>
		
			<li > <a class="customer-signin" href="#"> Customer Sign In </a></li>
		  </ul>
			</nav>
	</div>
</div>
    )
    
}
export default Navbar;
