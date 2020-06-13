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
    border: 1px solid black;
    box-sizing: border-box;
    max-width: 100vw;
    width: 100%;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
