import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
//declear the price per litre for fuel and diesel and 1KG for gas
export const fuel_price      ='150';
export const fuel_quantity   = '1';
export const gas_price       = '350';
export const gas_quantity    = '1';
export const diesel_price    = '200';
export const diesel_quantity = '1';
function ProductSignedIn(props) {

  const { register, handleSubmit, watch, errors, getValues } = useForm();
  const {handleAddClick} = props;


  const handleInputChange  = props.productInputChange;
  
  const {myStateData }  = props;
  const { nextStep }    = props;

  const { handleRemoveClick} = props;
  const {shoperPersonalDetailsHandler} =props;
  const {handleSignUpCheckBoxChange} =props;
   const onSubmit = data =>{
          console.log(data);
          this.setState({signedIn:!myStateData.signedIn});
          this.nextStep();
          
         }
 
  return (
       <React.Fragment>
    <div className="App">
     <div className ="form-row form-margin">
        <div className = "col"><label  >Product</label></div>
            
              
        <div className = "col"><label  >Amount(NGN)</label></div>
        <div className = "col"><label  >Quantity</label></div>
        <div className = "col"><label  ></label></div>
        </div>
        
      {myStateData.products.map((x, i) => {
        return (
          <React.Fragment>
              <div className ="form-row form-margin"  key ={i} >
                  <div className="col">
                      <select name="product" className ="form-control" value ={x.product} 
                              onChange={e => handleInputChange(e, i)}>
                          <option   value = "fuel">Fuel</option>
                          <option   value = "gas">Gas</option>
                          <option   value = "diesel">Diesel</option>
                      </select>
                  </div>
                  <div className="col">
                      <input className ="form-control" name="price" placeholder=""  value={x.price} onChange={e => handleInputChange(e, i)} type="number" />
                  </div>
                  <div className="col"> 
                      <input className ="form-control" name="quantity" placeholder="Enter" value={x.quantity} onChange={e => handleInputChange(e, i)} type="number" ref={register({ min: 5})}/>    
                  </div>
                  <div className="col">
                      {myStateData.products.length!==1 && <input type ="button" value ="-" className ="btn" onClick={() => handleRemoveClick(i)} />}
                      {myStateData.products.length-1==i && myStateData.products.length < 3 && <input type ="button" value ="+" className ="btn" onClick={handleAddClick}/>}
                  </div>
          
              </div>

          </React.Fragment>
                );
           })
        }
       </div>
       <React.Fragment>
            <div >
               <img src ="images/Ellipse.png"/> <span>Your details</span>
            </div>
            
           
            <div className ="form-row form-margin margin-bottom">
                <div className ="col">
                    
                    <input type ="text" name='fullName'
                     className ="form-control" 
                    placeholder ="Full name" 
                    value ={myStateData.fullName}
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
                    value ={myStateData.email}
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
                        value ={myStateData.phoneNumber}
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
                        value ={myStateData.zone}
                        onChange ={shoperPersonalDetailsHandler} 
                        ref={register({
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
                    value ={myStateData.deliveryAddress}
                    onChange ={shoperPersonalDetailsHandler}
                     ref={register({
                      required: "Delivery address is required",})}/>
                     {errors.deliveryAddress && (<p style={{ color: "red" }}> {
                        errors.deliveryAddress.message} </p>)}
                           


                </div>
               
            </div>
            
            
           
        </React.Fragment>
        <React.Fragment>
            <div className ="form-row form-margin ">

               
            </div>
            <Link to="/">
                  <button 
                      className="backToHome haykpo-btn">
                      Back
                  </button>
            </Link>
            <div 
                className ="form-row  checkout" 
                onClick ={handleSubmit(nextStep)}>
                <span>Proceed To Checkout</span>
            <img 
                src ="images/checkout_arrow.png" 
                type= "submit" alt = "proceed to checkout"
            />

            </div>        </React.Fragment></React.Fragment> )};



export default ProductSignedIn;