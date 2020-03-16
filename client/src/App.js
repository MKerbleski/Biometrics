import React from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import NewUserPage from './NewUserPage'
import Home from './Home'

class App extends React.Component{
	constructor(){
		super()
		this.state = {}
	}

	componentDidMount(){
		axios.get('/api/csv').then(res => {
			this.setState({
				data : res.data
			})
			console.log('res', res)
		}).catch(err => {
			this.setState({
				data: null
			})
			console.log('err', err)
		})
	}

  render(){
      return (
        <AppDiv>
          <Route exact path="/new" component={NewUserPage}  />
          <Route exact path="/" component={Home}  />
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