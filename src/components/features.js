import React from 'react';

const Features = () =>{

    return(
        <React.Fragment>
        
        
        <div className=" how-it-works-rect">
	<img src="images/Rectangle.png" alt ="pleceholder"/>
     <span className="getfuel"> Features</span>
     </div>
     
     
		

	<div className ="row ">
	   <div className ="col-sm-4   square ">
			
					<img src="images/tap.png" alt ="pleceholder"/>
					<p>Easy to use</p>
			
		</div>
		<div className ="col-sm-4  square">
			
					<img src="images/runer-silhouette-running-fast.png" alt ="pleceholder"/>
					<p>Fast Delivery</p>
			
		</div>
		<div className ="col-sm-4  square ">
			
					<img src="images/piggy-bank.png" alt ="pleceholder"/>
					<p>Cost free</p>
		
		</div>
	</div>


</React.Fragment>
    )
}
export default Features;