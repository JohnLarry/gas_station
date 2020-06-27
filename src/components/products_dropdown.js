import React from 'react'


class Product extends React.Component{
constructor(props){
    super(props);
    
    {/* handleAddProductDiv mornitors the change on the + button on the place order page */}
    this.handleAddProductDiv = this.handleAddProductDiv.bind(this);
    this.handleMinusProductDiv = this.handleMinusProductDiv.bind(this);
    this.a =0;
    const t =[];
    this.state ={productdiv:t}
    
   
}

handleAddProductDiv=()=>{
    this.a++;
    let inputDiv = <div className ="form-row form-margin">
    <div className = "col">
        

        <select className ="form-control">
            <option name = "fuel">Fuel</option>
            <option name = "gas">Gas</option>
            <option name = "diesel">Diesel</option>
        </select></div>
    <div className = "col">
        
        <input type ="text" className = "form-control"/>
    </div>
    <div className = "col">
        
        <input type ="text" className = "form-control"/>
        </div>
        
            <input  type ="button" value ="-" className ="btn" onClick ={this.handleMinusProductDiv(this.a)} />
        
        
        
</div>;

    const d =[].push(inputDiv);
    if(this.state.productdiv.length<2){


    this.setState( state =>{
        const productdiv = this.state.productdiv.concat(inputDiv);
        return{
            productdiv,

        };
}); }
};
handleMinusProductDiv=(a)=>{
    this.setState(
        state =>{
            const productdiv = this.state.productdiv.splice((a,1));
            return{
                productdiv,
            };

        }
    );
};
    render(){
         {/*const showProductDive = this.state.productdiv.map(inputItemFields =>(
         {inputItemFields}));*/}
           
        
        return(
            
            <React.Fragment>
        
        
        
            <div className ="form-row form-margin">
                <div className = "col">
                    <label  >Product</label>

                    <select className ="form-control">
                        <option name = "fuel">Fuel</option>
                        <option name = "gas">Gas</option>
                        <option name = "diesel">Diesel</option>
                    </select></div>
                <div className = "col">
                    <label  >Amount(NGN)</label>
                    <input type ="text" className = "form-control"/>
                </div>
                <div className = "col">
                    <label  >Quantity(Ltr/KG)</label>
                    <input type ="text" className = "form-control"/>
                    </div>
                    <input type ="button" value ="+" className ="btn" onClick ={this.handleAddProductDiv} />
            </div>
            
                {
                    this.state.productdiv.map((items, index)=>(
                      <div key ={index}>{items}</div>  
                    ))
               }
            
        </React.Fragment>);
            
        
    }
}


export default Product;