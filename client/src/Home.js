import React from 'react';
import styled from 'styled-components'
import {  Link } from 'react-router-dom'
import { withRouter } from 'react-router'


class App extends React.Component{
	constructor(){
		super()
		this.state = {}
	}

  render(){
      return (
        <AppDiv>
          <p>This is a health app but it's a little different. You wont get a username. You wont get a password. What you will get is a series of 12 randomly generated words and a QR code. This is the only thing that links you to your health data that you upload, and thats a good thing. This is your <strong>Private health key</strong>. Keep it safe (like in a safe) and don't share it with anyone other than those you trust most.</p> 
          <p>you will need this to login</p>
          <p> get started </p>
          <Link to='/new'>New User</Link>
          <button>Login</button>
        </AppDiv>
    );
  }
}

export default withRouter(App)

const AppDiv = styled.div`
    /* border: 1px solid red; */
    box-sizing: border-box;
    max-width: 100vw;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    .data{
      /* border: 1px solid blue; */
      display: flex;
      width: 95%;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      .top{
        /* border: 1px solid green; */
        /* max-width: 100%; */
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: row;
      }
    }
`