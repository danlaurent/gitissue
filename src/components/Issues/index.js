import React, { Component } from 'react';
import Logo from '../logo';
import IssueList from '../issue-list';
import IssueForm from '../issue-form';

import './style.css';

class Issues extends Component {

  render() {
    return(
      <div className="container">
        <Logo />
        <div className="columns">
          <IssueList />
          <IssueForm />
        </div>
      </div>
    )
  }
}

export default Issues;