import React from 'react';
import {Link} from 'react-router-dom';

const HomeHeader = () => {
  return (
    <React.Fragment>
      <div className="header">
        
        <div className="content">
          <div>
              <img src="images/Rectangle.png" alt="pleceholder" />
              <span className="getfueltxt">Get fuel delivered to your door step with</span>
           </div>
         
                <h5 className ="confidencetxt" >confidence</h5>
            
             <div className="order-button-div"> <Link  to="/order" className="buynow">
                buy now
              </Link></div>
          
          </div>

                <div className="image-box">

                <img src ="images/fuel_pump.png" alt="fuel_pump_handle"/>
        </div>
  


      </div>



        
<div className=" how-it-works-rect">
  <img src="images/Rectangle.png" alt ="pleceholder"/>
  <span className="getfuel">How it works</span></div>
<div className="square-holder">
    
      <div className=" square ">
        <img src="images/arrow-right.png" alt ="buy now "/>
        <p>Click "Buy now"</p>
      </div>
      

  

    
    <div className="square" >
       <img src="images/rectangle-tool.png" alt ="pleceholder"/> 
       <p>Fill in the necessary details </p>
    </div>
    

    <div className=" square"> 
      <img src="images/truck.png" alt ="pleceholder"/>
      <p>Await Delivery</p>
      </div>
    
  </div>
    

        <div className=" how-it-works-rect">
  <img src="images/Rectangle.png" alt ="pleceholder"/>
     <span className="getfuel"> Features</span>
     </div>
     
     
    

  <div className ="square-holder">
     <div className ="  square ">
      
          <img src="images/tap.png" alt ="pleceholder"/>
          <p>Easy to use</p>
      
    </div>
    <div className =" square">
      
          <img src="images/runer-silhouette-running-fast.png" alt ="pleceholder"/>
          <p>Fast Delivery</p>
      
    </div>
    <div className ="  square ">
      
          <img src="images/piggy-bank.png" alt ="pleceholder"/>
          <p>Cost free</p>
    
    </div>
  </div>


<div className="how-it-works-rect">
          <img src="images/Rectangle.png" alt ="start of our partners section"/>
            <span className="getfuel">our partners </span>
</div>
  <div className="our-partners ">



        
          <img src="images/enyo.png" alt ="enyo logo"/>
     

       
            <img src="images/cchub.png" alt ="cchub logo"/>
       
            <a href="/" >Become A Partner</a>
      
     </div>







    </React.Fragment>
  );
};

export default HomeHeader;
