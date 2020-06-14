import React from 'react';

const Features = () =>{

    return(
        <React.Fragment>
        <div className=" how-it-works-rect">
	<img src="images/Rectangle.png"/>
     <span className="getfuel"> Features</span>
     </div>
		
	<div className="how-it-works-body">
		<div className="square first-square">
			<img src="images/tap.png"/>
			<p>Easy to use</p>
		</div>
		<div className="square ">
			<img src="images/runer-silhouette-running-fast.png"/>
			<p>Fast Delivery</p>
		</div>
		<div className="square "> 
			<img src="images/piggy-bank.png"/>
			<p>Cost free</p>
		</div>
</div>

</React.Fragment>
    )
}
export default Features;