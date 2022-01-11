import React from 'react';

class User extends React.Component {
    render() {
      return(
        <div className='user-wrapper' >
          <img className='user-img' src={this.props.userInfo.avatar_url}/>
          <div className='info-wrapper' >
            <a target='_blank' href={this.props.userInfo.html_url}>{this.props.userInfo.name}</a>
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

export default User;