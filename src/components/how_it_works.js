import React from 'react'

const HowItWorks = ()=>{
    return(
        <React.Fragment>
        
<div className=" how-it-works-rect">
	<img src="images/Rectangle.png"/>
	<span className="getfuel">How it works</span></div>
<div className="row smallMargin">
		
			<div className="col-sm-4 square ">
				<img src="images/arrow-right.png"/><p>Click "Buy now"</p>
			</div>
			

	

		
		<div className="col-sm-4 square" >
			 <img src="images/rectangle-tool.png"/> <p>Fill in the necessary details </p>
		</div>
		

		<div className="col-sm-4 square"> 
			<img src="images/truck.png"/><p>Await Delivery</p>
			</div>
		
	</div>
    </React.Fragment>

    )
}
export default HowItWorks;