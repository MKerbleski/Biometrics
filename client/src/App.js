import React from 'react'
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import Keys from './Keys'
import AddressBook from './AddressBook'

class App extends React.Component{
	constructor(){
		super()
		this.state = {
		}
	}

  	render(){ 
		return (
			<AppDiv>
				<Link to="/keys">Keys</Link>
				<Link to="/addressBook">Address Book</Link>
				
				<Route path="/keys" component={Keys} />
				<Route path="/addressBook" component={AddressBook} />
			</AppDiv>
		);
	}
}

export default App

const AppDiv = styled.div`
    /* border: 1px solid red; */
    box-sizing: border-box;
    max-width: 100vw;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`
