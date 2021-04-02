import React from "react";
import {Link} from "react-router-dom";
export default function Homev(){

    return(
        <section className="app-sub-menu  angled-section">
  <div class="back-ground"></div>
 <div >
     
     <div>
                    <img src="images/Rectangle.png" alt="pleceholder" />
                    <span className="getfueltxt">Get fuel delivered to your door
                  step with</span>
              </div>
         
                <h5 className ="confidencetxt" >confidence</h5>
            
              <div className="order-button-div"> <Link  to="/order" className="buynow">
                    buy now
                  </Link>
              </div>
              
              </div>
 
 
 <div>  <img  src ="/images/fuel_pump.png" /></div>
        </section>
    )
}