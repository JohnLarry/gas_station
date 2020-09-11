
import React, { Component } from "react";
import { useForm } from "react-hook-form";
//declear the price per litre for fuel and diesel and 1KG for gas
export const fuel_price      ='150';
export const fuel_quantity   = '1';
export const gas_price       = '350';
export const gas_quantity    = '1';
export const diesel_price    = '200';
export const diesel_quantity = '1';
function Product(props) {

  const { register, handleSubmit, watch, errors } = useForm();
  const {handleAddClick} = props;


  const handleInputChange  = props.productInputChange;
  
  const {myStateData }  = props;

  const { handleRemoveClick} = props;
  return (
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
              <div className ="form-row form-margin"  key ={"product_"+i} >
                  <div className="col">
                      <select name="product" className ="form-control" key ={"product_"+i} value ={x.product} 
                              onChange={e => handleInputChange(e, i)}>
                          <option   value = "fuel">Fuel</option>
                          <option   value = "gas">Gas</option>
                          <option   value = "diesel">Diesel</option>
                      </select>
                  </div>
                  <div className="col">
                      <input className ="form-control" name="price" placeholder="" key ={"price_"+i} value={x.price} onChange={e => handleInputChange(e, i)} type="number" ref={register({ min: 18, max: 99 })}/>
                  </div>
                  <div className="col"> 
                      <input className ="form-control" name="quantity" placeholder="Enter"key ={"quantity_"+i} value={x.quantity} onChange={e => handleInputChange(e, i)} type="number" ref={register({ min: 18, max: 99 })}/>    
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
       </div> )};



export default Product;