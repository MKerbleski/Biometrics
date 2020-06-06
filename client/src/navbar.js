import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class NavBar extends React.Component{
	constructor(){
		super()
		this.state = {
		}
	}

  	render(){ 
		return (
			<NavBarDiv>
                <Link to="/home">Home</Link>
				<Link to="/keys">Keys</Link>
				<Link to="/addressBook">Address Book</Link>
			</NavBarDiv>
		);
	}
}

export default NavBar

const NavBarDiv = styled.div`
    /* border: 1px solid red; */
    box-sizing: border-box;
    max-width: 100vw;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`
