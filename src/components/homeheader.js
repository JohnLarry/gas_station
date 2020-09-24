import React from 'react';
import { Link } from 'react-router-dom';


const HomeHeader = () =>{
    return(
        <React.Fragment>
        <div className="header">
            
                    
                  
<nav class="navbar navbar-expand-lg ">

 <a class="navbar-brand" href="#"><img src="images/logo.svg"/></a>
  <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">
    <i className="fas fa-bars navIcon" ></i></span>
  </button>

  <div class="collapse navbar-collapse "  id="navbarSupportedContent">
   
    <ul class="navbar-nav mr-auto nav-items nav-bg">
      <li class="nav-item navLink">
      <Link  to ="/order" className="nav-link " > 
      </Link></li>
   <li class="nav-item mobile-nav-style "> <Link  to ="/order" >
        Home </Link>
      </li>
     

    <li class="nav-item mobile-nav-style" >  
    <Link  to ="/order" >
        About
        </Link>
      </li>
      
<li class="nav-item mobile-nav-style">     
 <Link  to ="/order" >
       
          FAQ 
        </Link>
        
      </li>
      
     <li class="nav-item mobile-nav-style"> <Link  to ="/order" >
        Contact </Link>
      </li>
      
            
       <li className ="list-no-style partner-signin mobile-nav-style"> 
       <Link className="#" to ="/order" ><span>

        Partner Sign In</span>
        </Link>
        </li>
            
     
     <li className ="list-no-style customer-signin white mobile-nav-style">
     <Link  className="white" to = "/order" > 
     Customer Sign In </Link></li>
    
    </ul>
    
  </div>
</nav>

















           
        
    <div className="row row1top homeage-zindex">
	   <div className="col">
    		  <div className="">

                 <img  src="images/Rectangle.png"/>
                 <span className="">Get fuel delivered to your door </span>
                 <span className="mobile-confidencetxt"> step with </span>


    	       </div>
	       <div className=" row homeage-zindex">
                <div className ="col "> 
                <span className ="confidencetxt">confidence</span>
                </div>
            </div>

	<div className="row bn homeage-zindex">

	  <Link className="buynow" to="/order">buy now</Link></div>
	</div>

	
</div>

            

        </div>
        </React.Fragment>
    )
    
}


export default HomeHeader;