import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

class HomeComponent extends Component {

  render() {
    return (
      <div>
        <header>
          USPAN
        </header>

        <div className="content">
          <RaisedButton label='Sign-In' containerElement={<Link to='signin' />} />
          <RaisedButton label='Register' containerElement={<Link to='register' />} />
        </div>
      </div>
    );
  }
}

export default HomeComponent;