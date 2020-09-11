
import React, { useState } from "react";

//declear the price per litre for fuel and diesel and 1KG for gas
export const fuel_price      =150;
export const fuel_quantity   = '1';
export const gas_price       = '350';
export const gas_quantity    = '1';
export const diesel_price    = '200';
export const diesel_quantity = '1';
function Product() {
  //inputlist for holding the added cart details
  const [inputList, setInputList] = useState([{ product:"fuel",
                                                price:fuel_price,
                                                quantity:fuel_quantity
                                               }]
                                              );

                  


 





  // handle input change
  const handleInputChange = (e, index) => {
    
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    if(name ==='product'){
      if( value ==='fuel'){
      
        list[index]['price'] = fuel_price;
        list[index]['quantity'] = fuel_price/150;
      }
     else if( value ==='gas'){
        
        list[index]['price'] = gas_price;
        list[index]['quantity'] = gas_price/350;
      }
      else{
        
        list[index]['price'] = diesel_price;
        list[index]['quantity'] = diesel_price/200;
      }
      

    }
    // change price as product quantity changes
    else if(name ==='quantity'){

      if(list[index]['product'] === 'fuel'){
        list[index]['price'] = value * fuel_price;
      }
      else if(list[index]['product'] === 'gas'){
        list[index]['price'] = value * gas_price;
      }
      else {
        list[index]['price'] = value * diesel_price;
      }
        
    }
    else{
      if(list[index]['product'] === 'fuel'){
        list[index]['quantity'] = value / fuel_price;
      }
      else if(list[index]['product'] === 'gas'){
        list[index]['quantity'] = value / gas_price;
      }
      else {
        list[index]['quantity'] = value / diesel_price;
      }

    }
    
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, {product:"fuel",price:fuel_price,quantity:fuel_quantity}]);
  };

  return (
    <div className="App">
     <div className ="form-row form-margin">
        <div className = "col"><label  >Product</label></div>
            
              
        <div className = "col"><label  >Amount(NGN)</label></div>
        <div className = "col"><label  >Quantity</label></div>
        <div className = "col"><label  ></label></div>
        </div>
        
      {inputList.map((x, i) => {
        return (
          <React.Fragment>
              <div className ="form-row form-margin">
                  <div className="col">
                      <select name="products" className ="form-control"  value ={x.product} 
                              onChange={e => handleInputChange(e, i)}>
                          <option   value = "fuel">Fuel</option>
                          <option   value = "gas">Gas</option>
                          <option   value = "diesel">Diesel</option>
                      </select>
                  </div>
                  <div className="col">
                      <input className ="form-control" name="price" placeholder="" value={x.price} onChange={e => handleInputChange(e, i)}/>
                  </div>
                  <div className="col"> 
                      <input className ="form-control" name="quantity" placeholder="Enter" value={x.quantity} onChange={e => handleInputChange(e, i)} />    
                  </div>
                  <div className="col">
                      {inputList.length!==1 && <input type ="button" value ="-" className ="btn" onClick={() => handleRemoveClick(i)} />}
                      {inputList.length-1==i &&inputList.length < 3 && <input type ="button" value ="+" className ="btn" onClick={handleAddClick}/>}
                  </div>
          
              </div>

          </React.Fragment>
                );
                                })
        }
       </div> )};


export default Product;