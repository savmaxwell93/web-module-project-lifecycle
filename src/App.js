import axios from 'axios';
import React from 'react';
import './index.css'

import User from './components/User';
import Followers from './components/FollowerList';

class App extends React.Component {
  state = {
    user: 'savmaxwell93',
    userInfo: {},
    followers: []
  }

  componentDidMount(prevProps, prevState) {
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(resp => {
        this.setState({
          ...this.state,
          userInfo: resp.data
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.userInfo !== prevState.userInfo) {
      axios.get(`https://api.github.com/users/${this.state.user}/followers`)
        .then(resp => {
          this.setState({
            ...this.state,
            followers: resp.data
          })
        })
        .catch(err => {
          console.error(err)
        })
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      user: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = this.state.user
    axios.get(`https://api.github.com/users/${user}`)
      .then(resp => {
        this.setState({
          ...this.state,
          userInfo: resp.data,
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return(
      <div className='app-wrapper'>
        <h1>GITHUB INFO</h1>
        <div className='search-bar' >
          <form onSubmit={this.handleSubmit} >
            <input onChange={this.handleChange} placeholder='Github Handle' />
            <button>Search</button>
          </form>
        </div>
        <User userInfo={this.state.userInfo} />
        <Followers followers={this.state.followers} />
      </div>);
  }
}

export default App;
