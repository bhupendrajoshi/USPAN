import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

class RegisterComponent extends Component {

  render() {
    return (
      <div className="content">
        <RaisedButton label='Buyer' containerElement={<Link to='register/buyerregistration' />} />
        <RaisedButton label='Manufacturer' containerElement={<Link to='register/manufacturerregistration' />} />
      </div>
    );
  }
}

export default RegisterComponent;