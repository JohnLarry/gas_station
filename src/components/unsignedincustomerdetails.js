import React from 'react';

const  UnsignedinCustomerDetails = () =>{
    return(
        <React.Fragment>
            <div >
               <img src ="images/Ellipse.png"/> <span>Your details</span>
            </div>
            
           
            <div className ="form-row form-margin margin-bottom">
                <div className ="col">
                    
                    <input type ="text" className ="form-control" placeholder ="Full name"/>
                </div>
            </div>
            <div className ="form-row form-margin margin-bottom">
                <div className ="col">
                    <input type ="email" placeholder ="Email" className ="form-control"/>
                </div>
                <div className ="col">
                    <input type ="tel" placeholder ="Phone" className ="form-control" />
                </div>
            </div>
            <div className ="form-row form-margin margin-bottom">
                <div className ="col">
                    <select className ="">
                        <option>Zone</option>
                        <option>Agege</option>
                        <option>Ikeja</option>
                    </select>
                </div>
                <div className ="col">
                    <input className ="form-control" placeholder ="Delivery address"/>

                </div>
            </div>
            <div className ="form-row form-margin ">
                <div className ="col"> 
                <label className ="container">Sign up to get your purchase history
                    <input type= "checkbox"/>
                   <span className ="checkmark"></span>
                </label>
                </div>
               
            </div>
            <div className ="checkout"><span>Proceed To Checkout</span>
            <img src ="images/checkout_arrow.png"/>
            </div>
           
        </React.Fragment>
    )
}
export default UnsignedinCustomerDetails;