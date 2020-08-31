
import React, { useState } from "react";
//declear the price per litre for fuel and diesel and 1KG for gas
const fuel_price      ='150';
const fuel_quantity   = '1';
const gas_price       = '350';
const gas_quantity    = '1';
const diesel_price    = '200';
const diesel_quantity = '1';
function Product() {
  //inputlist for holding the added cart details
  const [inputList, setInputList] = useState([{ product:"fuel",
                                                price:fuel_price,
                                                quantity:fuel_quantity
                                               }]
                                              );

  const [signUpButton, setSignUpButton] = useState([{checked:false}])                    

//signup click on change listener
const handleSignUpChange=()=>{
  //set state of signup button
  setSignUpButton({
      checked: !signUpButton.checked
                     });
                              }
       
//display signup if signup button is checked
const showSignup =signUpButton.checked ?
        
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
          <select name="product" className ="form-control"  value ={x.product} 
       onChange={e => handleInputChange(e, i)}>
                <option   value = "fuel">Fuel</option>
                <option   value = "gas">Gas</option>
                <option   value = "diesel">Diesel</option>
            </select></div>
             <div className="col">
            <input
             
             className ="form-control"
              name="price"
			  placeholder=""
              value={x.price}
              onChange={e => handleInputChange(e, i)}
            /></div>
             <div className="col">
            <input
              className ="form-control"
              name="quantity"
			  placeholder="Enter"
              value={x.quantity}
              onChange={e => handleInputChange(e, i)}
            /></div>
            <div className="col">
    {inputList.length!==1 && <input type ="button" value ="-" className ="btn" onClick={() => handleRemoveClick(i)} />}
    {inputList.length-1==i &&inputList.length < 3 && <input type ="button" value ="+" className ="btn" onClick={handleAddClick}/>}
          </div>
          
          </div>

          
           








          </React.Fragment>
        );
      })}



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
      
            <div className ="form-row form-margin ">
                <div className ="col"> 
                <label className ="container">Sign up to get your purchase history
                    <input type= "checkbox"
                    checked ={ signUpButton.checked }
                    onChange ={ handleSignUpChange }
                    />
                   <span className ="checkmark"></span>
                </label>
                </div>
               
            </div>

            { showSignup }
    </div>



  );
}


export default Product;