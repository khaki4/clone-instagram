import React, { Component } from 'react';
import LoginForm from './presenter'

class Container extends Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    const { username, password } = this.state;
    return <LoginForm
      usernameValue={username}
      passwordValue={password}
      handleInputChange={this._handleInputChange}
      handleSubmit={this._handleSubmit}
    />
  }
  _handleInputChange = event => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value
    })
  };
  _handleSubmit = event => {
    event.preventDefault();
    // redux will be here
  }
}

export default Container;