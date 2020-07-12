import React from 'react';
import styled from 'styled-components'
import { withRouter } from 'react-router'
import NewAddressForm from './newAddressForm';
import ExistingAddresses from './existingAddresses';

class AddressBook extends React.Component{
	constructor(){
		super()
		this.state = {} 
	}

	render(){
		return (
			<AddressBookDiv>
				<label>Address Book</label>
				<div class="lower">
					<NewAddressForm />
					<ExistingAddresses />
				</div>
			</AddressBookDiv>
		);
	}
}

export default AddressBook

const AddressBookDiv = styled.div`
	/* border: 1px solid red; */
	box-sizing: border-box;
	max-width: 100vw;
	width: 100%;
	color: black;
	display: flex;
	flex-direction: column;
	align-items: center;
	.lower{
		border: 1px solid red;
		width: 100%;
		display: flex;
		justify-content: space-evenly;
	}
`