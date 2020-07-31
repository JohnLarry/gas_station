
import React, { useState } from "react";

function Product() {
  const [inputList, setInputList] = useState([{product:"fuel",price:"",quantity:""}]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
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
    setInputList([...inputList, {product:"fuel",price:"",quantity:""}]);
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
    {inputList.length-1==i &&<input type ="button" value ="+" className ="btn" onClick={handleAddClick}/>}
          </div>
          
          </div>
          </React.Fragment>
        );
      })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
}


export default Product;