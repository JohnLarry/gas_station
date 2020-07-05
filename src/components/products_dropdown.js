import React, {useState} from 'react'

function Product(){
const [inputList, setInputList] = useState([{productName:"",price:"",quantity:""}]);

const handleAddProductDiv =()=>{
    
        setInputList([...inputList, {productName:"",price:"",quantity:""}])
    

}

const handleRemoveProductDiv =(e,index)=>{
  
        const list = [...inputList];
        list.splice(index,1);
        setInputList(list);
        setInputList(list);
    
    
    }
const handleProductDivChange =(e,index)=>{
    const {name, value} =e.target;
    const list = [...inputList];
    list[index,name] = value;
    setInputList(list);


    
    }

  return( 
 inputList.map((forminput, index)=>{
     return(
         
        <React.Fragment>
        <div className ="form-row form-margin">
        <div className = "col">
            <label  >Product</label>

            <select name="productName" className ="form-control" value ={forminput.productName} onChange={e=>handleProductDivChange(e,index)}>
                <option  name = "fuel">Fuel</option>
                <option   name = "gas">Gas</option>
                <option name = "diesel">Diesel</option>
            </select></div>
        <div className = "col">
            <label  >Amount(NGN)</label>
            <input type ="text" value ={forminput.price} onChange={e=>handleProductDivChange(e,index)} className = "form-control"/>
        </div>
        <div className = "col">
            <label  >Quantity(Ltr/KG)</label>
            <input type ="text" value ={forminput.quantity} onChange ={e =>handleProductDivChange(e,index)} className = "form-control"/>
            </div>
            <div className="col">
            {inputList.length-1==index &&<input type ="button" value ="+" className ="btn" onClick ={handleAddProductDiv} />}
            {inputList.length!==1 && <input type ="button" value ="-" className ="btn" onClick ={()=>handleRemoveProductDiv(index)} />}
            </div>
            
    </div>
    <div>{JSON.stringify(inputList)}</div>
    </React.Fragment>
     )})
 );

}
export default Product;