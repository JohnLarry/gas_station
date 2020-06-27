import  React from 'react';

{/* The password component of signup to see you purchase history
on place order page*/}

class PlaceOrderPageSignUp extends React.Component{
    constructor(){
        super();
        this.state = {checked:false};
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(){
        this.setState({
            checked: !this.state.checked
        })
    }
    render(){
        const showSignup =this.state.checked ?
        
        <React.Fragment>
        
        <div className ="form-row form-margin place-order-signup">
            <div className ="col">
                <input type ="password" placeholder =" Create Password" className ="form-control"/>
            </div>
            
        </div>

        <div className ="form-row form-margin place-order-signup">
            <div className ="col">
                <input type ="password" placeholder ="Confirm Password" className ="form-control"/>
            </div>
            
        </div>
        <div className ="form-row form-margin place-order-signup-btn">
            <input type ="submit"  value ="Sign up"className ="btn  haykpo-btn"/>
        </div>

    </React.Fragment>:null;
     return(
        <React.Fragment>
            <div className ="form-row form-margin ">
                <div className ="col"> 
                <label className ="container">Sign up to get your purchase history
                    <input type= "checkbox"
                    checked ={ this.state.checked }
                    onChange ={ this.handleChange }/>
                   <span className ="checkmark"></span>
                </label>
                </div>
               
            </div>
            { showSignup }
        </React.Fragment>
    )

    
   
}
}
export default PlaceOrderPageSignUp;