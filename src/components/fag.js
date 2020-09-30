import React, { Component } from "react";


 function Fag(){
 	const our_fags =[
 		{
 			title :"first",
 			detail :"Second"
 		},
 		{
 			title :"first",
 			detail :"Second"
 		},
 		{
 			title :"first",
 			detail :"Second"
 		},
 		{
 			title :"first",
 			detail :"Second"
 		},
 		{
 			title :"first",
 			detail :"Second"
 		},
 		];
 		
	return( 
		<div>

		{our_fags.map((value,index)=>{
		return(
			<div key ={index}><span>{value.title}</span><span>{value.detail}</span></div>
			)
		})}
			
		</div>);

}
export default  Fag;