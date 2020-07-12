import React from 'react';
import styled from 'styled-components'

class NewAddressForm extends React.Component{
	constructor(){
		super()
		this.state = {}
	}

  	render(){
      return (
        	<NewAddressFormDiv>
              <label>first</label>
              <input id='first' type='number'></input>
              <label>second</label>
              <input id='second' type='number'></input>
              <label>third</label>
              <input id='third' type='number'></input>
              <label>forth</label>
              <input id='forth' type='number'></input>
              <label>fifth</label>
              <input id='fifth' type='number'></input>
              <label>name</label>
              <input id='name' type='string'></input>
        	</NewAddressFormDiv>
    	);
  	}
}

export default NewAddressForm

const NewAddressFormDiv = styled.form`
	/* border: 1px solid red; */
	box-sizing: border-box;
	max-width: 100vw;
	color: black;
	display: flex;
	flex-direction: column;
	align-items: center;
`