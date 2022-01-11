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
          <div className='follower-info' >
            <img className='follower-img' src={this.props.followers[0].avatar_url}/>
            <a target='_blank' href="">{this.props.followers[0].login}</a>
          </div>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    user: 'savmaxwell93',
    userInfo: {
      "login": "savmaxwell93",
      "id": 85320713,
      "node_id": "MDQ6VXNlcjg1MzIwNzEz",
      "avatar_url": "https://avatars.githubusercontent.com/u/85320713?v=4",
      "url": "https://api.github.com/users/savmaxwell93",
      "html_url": "https://github.com/savmaxwell93",
      "type": "User",
      "site_admin": false,
      "name": "Savannah Maxwell",
      "location": "Boise, ID",
      "public_repos": 46,
      "followers": 32,
      "following": 26,
    },
    followers: [
      {
        "login": "MychaelM",
        "id": 46407553,
        "node_id": "MDQ6VXNlcjQ2NDA3NTUz",
        "avatar_url": "https://avatars.githubusercontent.com/u/46407553?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/MychaelM",
        "html_url": "https://github.com/MychaelM",
        "followers_url": "https://api.github.com/users/MychaelM/followers",
        "following_url": "https://api.github.com/users/MychaelM/following{/other_user}",
        "gists_url": "https://api.github.com/users/MychaelM/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/MychaelM/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/MychaelM/subscriptions",
        "organizations_url": "https://api.github.com/users/MychaelM/orgs",
        "repos_url": "https://api.github.com/users/MychaelM/repos",
        "events_url": "https://api.github.com/users/MychaelM/events{/privacy}",
        "received_events_url": "https://api.github.com/users/MychaelM/received_events",
        "type": "User",
        "site_admin": false
      },
    ]
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
