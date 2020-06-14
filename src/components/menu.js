import React, {Component} from 'react'
class PlaceOrder extends Component {

	state = {
		firstName :"John",
		lastName : "Ugbor",
		dateOfBirth :"5/27/1991"
	}
	changeName = (evt)=>{

		this.setState({lastName :evt.target.value})
		console.log(evt.target.value)


	}

	render() {
		return (
			<div>
		<h1 onClick = {this.props.username} > John senr fullstack devoloper says hello</h1>
	     <input type ="text" onChange ={this.changeName} value ={this.state.lastName}/></div>)
	  }

}
export default PlaceOrder