import  React from 'react';
import { useForm } from 'react-hook-form';

function  PlaceOrderPageSignUp(props){
    
   
         const { register, errors,getValues,handleSubmit } = useForm({
                  mode: 'onBlur',
                  reValidateMode: 'onChange',
                  defaultValues: {},
                  resolver: undefined,
                  context: undefined,
                  criteriaMode: "firstError",
                  shouldFocusError: true,
                  shouldUnregister: true,
                });    
         const onSubmit = data =>{
          console.log(data);
         }
        const {shoperPersonalDetailsHandler,handleSignUpCheckBoxChange} =props;
        const showSignup = props.myStateData.checked ?
        
        
        <div>
        
        <div className ="form-row form-margin place-order-signup">
            <div className ="col">
                <input type ="password" placeholder =" Create Password" 
                    className ="form-control" name ="password" 
                    onChange ={shoperPersonalDetailsHandler} 
                    ref={register({
                      required: "Password  is required",})}/>
                     {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
             )}
                    
            </div>
            
        </div>

        <div className ="form-row form-margin place-order-signup">
            <div className ="col">
                <input type ="password" name ="confirmPassword" 
                placeholder ="Confirm Password" className ="form-control" 
                onChange ={shoperPersonalDetailsHandler}
               ref={register({
                      required: "Password confirmation is required",
                      validate: {
                      matchesPreviousPassword: (value) => {
                      const { password } = getValues();
                      return password === value || 'Passwords should match!';
                    },},})}/>
                                
                {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
             )}
            </div>
            
        </div>
        <div className ="form-row form-margin place-order-signup-btn">
            <input type ="submit" onClick ={handleSubmit(onSubmit)} value ="Sign up and proceed to checkout"className ="btn  haykpo-btn"/>
        </div>

    </div>:<div className ="form-row  checkout" onClick ={handleSubmit(onSubmit)} ><span>Proceed To Checkout</span>
            <img src ="images/checkout_arrow.png" type= "submit" alt = "proceed to checkout"
            />

            </div>;
     return(
        <React.Fragment>
            <div className ="form-row form-margin ">
                <div className ="col"> 
                <label className ="container">Sign up to get your purchase history
                    <input type= "checkbox"
                    checked ={ props.myStateData.checked}
                    onChange ={ handleSignUpCheckBoxChange }/>
                   <span className ="checkmark"></span>
                </label>
                </div>
               
            </div>
            { showSignup }
        </React.Fragment>
    )

    
   
}

export default PlaceOrderPageSignUp;