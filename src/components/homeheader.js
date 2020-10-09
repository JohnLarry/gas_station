import React from 'react';
import { Link } from 'react-router-dom';


const HomeHeader = () =>{
    return(
        <React.Fragment>
        <div className="header">
            
                    
                  
<nav class="navbar navbar-expand-lg ">

 <Link  to ="/" className="nav-link " > <a class="navbar-brand" href="/"><img src="images/logo.svg" alt ="logo"/></a></Link>
  <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">
    <i className="fas fa-bars navIcon" ></i></span>
  </button>

  <div class="collapse navbar-collapse "  id="navbarSupportedContent">
   
    <ul className="navbar-nav  nav-items nav-bg">
      <li className="nav-item navLink">
      <Link  to ="/order" className="nav-link " > 
      </Link></li>
   <li className="nav-item mobile-nav-style "> <Link  to ="/" >
         </Link>
      </li>
     

  
      
<li className="nav-item mobile-nav-style">     
 <Link  to ="/fag" >
       
          
        </Link>
        
      </li>
      
     <li className="nav-item mobile-nav-style"> <Link  to ="/contact" >
         </Link>
      </li>
      
            
       <li className ="list-no-style partner-signin mobile-nav-style"> 
       <Link className="#" to ="/partner_signin" ><span>

        </span>
        </Link>
        </li>
            
     
     <li className ="list-no-style customer-signin white mobile-nav-style">
     <Link  className="white" to = "/customer_signin" > 
     </Link></li>
    
    </ul>
    
  </div>
</nav>

















           
        
    <div className="row row1top homeage-zindex">
	   <div className="col">
    		  <div className="">

                 <img  src="images/Rectangle.png" alt ="pleceholder"/>
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