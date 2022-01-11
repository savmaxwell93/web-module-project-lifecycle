import React from 'react';

class Follower extends React.Component {
    render () {
      return(
        <div className='follower-info' >
          <img className='follower-img' src={this.props.follower.avatar_url}/>
          <a target='_blank' href={this.props.follower.html_url}>{this.props.follower.login}</a>
        </div>
      )
    }
}

export default Follower