import React, {Component} from 'react';

class UnsignedinCustomerDetails extends Component {
    render(){
    const {shoperPersonalDetailsHandler} =this.props;
    return(
        <React.Fragment>
            <div >
               <img src ="images/Ellipse.png"/> <span>Your details</span>
            </div>
            
           
            <div className ="form-row form-margin margin-bottom">
                <div className ="col">
                    
                    <input type ="text" name='fullName' className ="form-control" placeholder ="Full name" onChange ={shoperPersonalDetailsHandler} required/>
                </div>
            </div>
            <div className ="form-row form-margin margin-bottom">
                <div className ="col">
                    <input type ="email" name ="email" placeholder ="Email" className ="form-control" onChange ={shoperPersonalDetailsHandler} required/>
                </div>
                <div className ="col">
                    <input type ="tel" name='phoneNumber' placeholder ="Phone" className ="form-control" onChange ={shoperPersonalDetailsHandler} required/>
                </div>
            </div>
            <div className ="form-row form-margin margin-bottom">
                <div className ="col">
                    <select className ="" name ='zone' onChange ={shoperPersonalDetailsHandler}>
                        <option>Zone</option>
                        <option value ='Agege'>Agege</option>
                        <option value ='Ikeja'>Ikeja</option>
                    </select>
                </div>
                <div className ="col">
                    <input className ="form-control" name ='deliveryAddress' placeholder ="Delivery address" onChange ={shoperPersonalDetailsHandler} required/>

                </div>
            </div>
            
            <div className ="checkout"><span>Proceed To Checkout</span>
            <img src ="images/checkout_arrow.png" alt = "proceed to checkout"
            />

            </div>
           
        </React.Fragment>
    );}
}
export default UnsignedinCustomerDetails;