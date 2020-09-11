import  React from 'react';
import { useForm } from 'react-hook-form';

class PlaceOrderPageSignUp extends React.Component{
    
    render(){
        
        const {shoperPersonalDetailsHandler,handleSignUpCheckBoxChange} =this.props;
        const showSignup =this.props.myStateData.checked ?
        
        
        <React.Fragment>
        
        <div className ="form-row form-margin place-order-signup">
            <div className ="col">
                <input type ="password" placeholder =" Create Password" 
                    className ="form-control" name ="password" 
                    onChange ={shoperPersonalDetailsHandler} />
                    
            </div>
            
        </div>

        <div className ="form-row form-margin place-order-signup">
            <div className ="col">
                <input type ="password" name ="confirmPassword" placeholder ="Confirm Password" className ="form-control" onChange ={shoperPersonalDetailsHandler}/>
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
                    checked ={ showSignup }
                    onChange ={ handleSignUpCheckBoxChange }/>
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