import React, {Component} from 'react';
import { useForm } from 'react-hook-form';

function UnsignedinCustomerDetails(props) {
    
    const {shoperPersonalDetailsHandler} =props;
    const { handleSubmit, register, errors } = useForm({
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

    return(
        <React.Fragment>
            <div >
               <img src ="images/Ellipse.png"/> <span>Your details</span>
            </div>
            
           
            <div className ="form-row form-margin margin-bottom">
                <div className ="col">
                    
                    <input type ="text" name='fullName'
                     className ="form-control" 
                    placeholder ="Full name" 
                    onChange ={shoperPersonalDetailsHandler} 
                    ref={register({
                        required: " Name is required", 
                        pattern:{
                            value: /^(\w\w+)\s(\w\w+)$/i,
                            message: "Each name must be up to 2 letters"}})}/>
                    {errors.fullName &&
                    (<p style={{ color: "red" }}> {errors.fullName.message}</p>)}
                </div>
            </div>
            <div className ="form-row form-margin margin-bottom">
                <div className ="col">
                    <input type ="email" name ="email" placeholder ="Email" 
                    className ="form-control" onChange ={shoperPersonalDetailsHandler}
                     ref={register({
                      required: " Email address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                      }
                    })}/>
                     {errors.email && (<p style={{ color: "red" }}> {
                        errors.email.message}</p>)}
                </div>
                <div className ="col">
                    <input type ="number" name="phoneNumber" placeholder ="08069744444 " 
                        className ="form-control"
                        onChange ={shoperPersonalDetailsHandler} 
                       ref={register({
                      required: "Phone number is required",})}/>
                     {errors.phoneNumber && (<p style={{ color: "red" }}> {
                        errors.phoneNumber.message} </p>)}
                           
                </div>
            </div>
            <div className ="form-row form-margin margin-bottom">
                <div className ="col">
                    <select className ="" name ='zone' 
                        onChange ={shoperPersonalDetailsHandler} ref={register({
                      required: "Delivery zone is required",})}>
                        
                        <option value =''>Zone</option>
                        <option value ='Agege'>Agege</option>
                        <option value ='Ikeja'>Ikeja</option>
                    </select>
                    {errors.zone && (<p style={{ color: "red" }}> {
                     errors.zone.message} </p>)}
                </div>
                <div className ="col">
                    <input className ="form-control" name ='deliveryAddress' 
                    placeholder ="Delivery address" 
                    onChange ={shoperPersonalDetailsHandler}
                     ref={register({
                      required: "Delivery address is required",})}/>
                     {errors.deliveryAddress && (<p style={{ color: "red" }}> {
                        errors.deliveryAddress.message} </p>)}
                           


                </div>
               
            </div>
            
            
           
        </React.Fragment>
    );}

export default UnsignedinCustomerDetails;