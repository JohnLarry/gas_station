import React from 'react';

const OurPartners = () =>{

    return(
        <React.Fragment>
        <div className="how-it-works-rect">
	        <img src="images/Rectangle.png" alt ="start of our partners section"/>
            <span className="getfuel">our partners </span>
</div>
	<div className="row ">
        <div className ="col-sm-4 "><img src="images/enyo.png" 
        className="smallMargin" alt ="enyo logo"/>
        </div>

        <div className ="col-sm-4"> 
            <img src="images/cchub.png" alt ="cchub logo"/>
        </div>
        <div className ="col-sm-4">
            <a href="/" className ="buynowFooter">Become A Partner</a>
        </div>
     </div>
        </React.Fragment>
    )
}
export default OurPartners;