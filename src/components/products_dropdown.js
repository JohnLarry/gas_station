import React from 'react'

const Product = () => {
    return(
        <React.Fragment>
        
        
        
            <div className ="form-row form-margin">
                <div className = "col">
                    <label for ="productname">Product</label>

                    <select className ="form-control">
                        <option name = "fuel">Fuel</option><span>Ltr</span>
                        <option name = "gas">Gas</option><span>Kg</span>
                        <option name = "diesel">Diesel</option><span>Ltr</span>
                    </select></div>
                <div className = "col">
                    <label for ="amount">Amount(NGN)</label>
                    <input type ="text" className = "form-control"/>
                </div>
                <div className = "col">
                    <label for ="quantity">Quantity(Ltr/KG)</label>
                    <input type ="text" className = "form-control"/>
                    <span className ="glyphicon glyphicon-plus"></span></div>
                    
            </div>
       

 
</React.Fragment>
    )
}

export default Product;