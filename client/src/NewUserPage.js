import React from 'react';
import styled from 'styled-components'

export default class App extends React.Component{
	constructor(){
		super()
		this.state = {}
	}

  render(){

      return (
        <AppDiv>
          New user page
        </AppDiv>
    );
  }
}

const AppDiv = styled.div`
    /* border: 1px solid red; */
    box-sizing: border-box;
    max-width: 100vw;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;

`