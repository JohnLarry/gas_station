import React from 'react';
import { Link } from 'react-router-dom';


const HomeHeader = () =>{
    return(
        <React.Fragment>
        <div className="header">
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
        
    <div className="row row1top">
	<div className="col-sm-5">
		<div className="rect1">

   <img  src="images/Rectangle.png"/>
		  <span className="getfuel">Get fuel delivered to your door step with</span>

	</div>
	<div className=" row confidencetxt"> <p >confidence</p></div>
	<div className="row bn">

		<a className="buynow" href="#">buy now</a></div>
	</div>

	<div className="col-sm-7 pump-handle"> 
		<div >
		 
		 <div className="col-sm-1"><img src="images/Arrow.png"  /></div>
		 
		 	</div>
	</div>
</div>

            

        </div>
        </React.Fragment>
    )
    
}


export default HomeHeader;