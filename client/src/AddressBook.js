import React from 'react';
import styled from 'styled-components'
import { withRouter } from 'react-router'
import NavBar from './navbar'

class AddressBook extends React.Component{
	constructor(){
		super()
		this.state = {}
	}

  render(){
      return (
        <AddressBookDiv>
            <label>Address Book</label>
        </AddressBookDiv>
    );
  }
}

export default AddressBook

const AddressBookDiv = styled.div`
    /* border: 1px solid red; */
    box-sizing: border-box;
    max-width: 100vw;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`