import React from 'react';
import './index.css'

class App extends React.Component {
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
        <div className='user-wrapper' >
          <img className='user-img' src="https://avatars.githubusercontent.com/u/85320713?v=4"/>
          <div className='info-wrapper' >
            <a target='_blank' href="">Name</a>
            <p>Username</p>
            <h3>Total Repos:</h3>
            <h3>Total Followers:</h3>
            <h3>Following:</h3>
            <h3>Location:</h3>
          </div>
        </div>
        <div className='followers-wrapper' >
          <h2>Followers:</h2>
          <div className='follower-wrapper' >
            <div className='follower-info' >
              <img className='follower-img' src="https://avatars.githubusercontent.com/u/85320713?v=4"/>
              <a target='_blank' href="">Username</a>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default App;
