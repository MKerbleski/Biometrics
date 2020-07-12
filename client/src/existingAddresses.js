import React from 'react';
import styled from 'styled-components'

class ExistingAddresses extends React.Component{
	constructor(){
		super()
		this.state = {}
	}

	render(){
		return (
			<ExistingAddressesDiv>
				<label>All Addresses</label>
					
			</ExistingAddressesDiv>
		);
	}
}

export default ExistingAddresses

const ExistingAddressesDiv = styled.div`
    /* border: 1px solid red; */
    box-sizing: border-box;
    max-width: 100vw;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`