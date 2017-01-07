import React, { Component } from 'react';
import './style.css';
import AppContainer from '../app-container';
import ajax from '@fdaciuk/ajax';

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: null,
      repos: []
    }
  }

  handleSearch (e) {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;

    if (keyCode === ENTER) {
        ajax().get(`https://api.github.com/users/${value}`).then((result) => {
            this.setState({
              user: {
                name: result.name,
                avatar: result.avatar_url
              }
            })
          ajax().get(`https://api.github.com/users/${value}/repos`).then((result) => {
            this.setState({
              repos: result.map((repo) => {
                return {
                  name: repo.name,
                  link: repo.html_url,
                  count: repo.open_issues
                }
              })
            })
          })
        })
    }
  }

  render () {
    return (
      <AppContainer
        user={this.state.user}
        repos={this.state.repos}
        handleSearch={(e) => this.handleSearch(e)}
       />
    )
  }
}

export default App;
