import React from 'react';

const  UnsignedinCustomerDetails = () =>{
    return(
        <React.Fragment>
            <div >
               <img src ="images/Ellipse.png"/> <span>Your details</span>
            </div>
            
           
            <div className ="form-row form-margin margin-bottom">
                <div className ="col">
                    
                    <input type ="text" name='fullname' className ="form-control" placeholder ="Full name"/>
                </div>
            </div>
            <div className ="form-row form-margin margin-bottom">
                <div className ="col">
                    <input type ="email" name ="email" placeholder ="Email" className ="form-control"/>
                </div>
                <div className ="col">
                    <input type ="tel" name='tel' placeholder ="Phone" className ="form-control" />
                </div>
            </div>
            <div className ="form-row form-margin margin-bottom">
                <div className ="col">
                    <select className ="" name ='zone'>
                        <option>Zone</option>
                        <option value ='Agege'>Agege</option>
                        <option value ='Ikeja'>Ikeja</option>
                    </select>
                </div>
                <div className ="col">
                    <input className ="form-control" name ='address' placeholder ="Delivery address"/>

                </div>
            </div>
            
            <div className ="checkout"><span>Proceed To Checkout</span>
            <img src ="images/checkout_arrow.png"/>
            </div>
           
        </React.Fragment>
    )
}
export default UnsignedinCustomerDetails;