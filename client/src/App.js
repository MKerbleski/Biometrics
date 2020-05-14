import React from 'react';
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import NewUserPage from './NewUserPage'
import Home from './Home'
import lightwallet from 'eth-lightwallet'

class App extends React.Component{
	constructor(){
		super()
		this.state = {
			secretSeed: '',
		}
	}

	componentDidMount(){

	}

	generateSeed = () => {
		var secretSeed = lightwallet.keystore.generateRandomSeed();
		this.setState({ secretSeed })
	}

  render(){
		const { secretSeed } = this.state
      return (
        <AppDiv>
					<button onClick={this.generateSeed}>Generate Seed</button>
					<p>{secretSeed}</p>
        </AppDiv>
    );
  }
}

// <Route exact path="/" component={Home}  />
// <Route exact path="/new" component={NewUserPage}  />

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
