import React from 'react';
import Follower from './Follower'

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

export default Followers;