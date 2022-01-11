import axios from 'axios';
import React from 'react';
import './index.css'

class User extends React.Component {
  render() {
    return(
      <div className='user-wrapper' >
        <img className='user-img' src={this.props.userInfo.avatar_url}/>
        <div className='info-wrapper' >
          <a target='_blank' href="">{this.props.userInfo.name}</a>
          <p>{this.props.userInfo.login}</p>
          <h3>Location: {this.props.userInfo.location}</h3>
          <h3>Total Repos: {this.props.userInfo.public_repos}</h3>
          <h3>Following: {this.props.userInfo.following}</h3>
          <h3>Total Followers: {this.props.userInfo.followers}</h3>
        </div>
      </div>
    )
  }
}

class Followers extends React.Component {
  render() {
    return(
      <div className='followers-wrapper' >
        <h2>Followers:</h2>
        <div className='follower-wrapper' >
          {this.props.followers.map(follower => {
            return (<Follower key={follower.login} follower={follower}/>)
          })}
        </div>
      </div>
    )
  }
}

class Follower extends React.Component {
  render () {
    return(
      <div className='follower-info' >
        <img className='follower-img' src={this.props.follower.avatar_url}/>
        <a target='_blank' href="">{this.props.follower.login}</a>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    user: 'savmaxwell93',
    userInfo: {},
    followers: []
  }

  componentDidMount(prevProps, prevState) {
    axios.get("https://api.github.com/users/savmaxwell93")
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
      axios.get("https://api.github.com/users/savmaxwell93/followers")
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

  render() {
    return(
      <div className='app-wrapper'>
        <h1>GITHUB INFO</h1>
        <div className='search-bar' >
          <form>
            <input placeholder='Github Handle' />
            <button>Search</button>
          </form>
        </div>
        <User userInfo={this.state.userInfo} />
        <Followers followers={this.state.followers} />
      </div>);
  }
}

export default App;
