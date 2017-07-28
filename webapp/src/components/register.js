import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterComponent extends Component {

  render() {
    return (
      <div>
        <Link to='buyerregistration'>Buyer</Link>
        <Link to='manufacturerregistration'>Manufacturer</Link>
      </div>
    );
  }
}

export default RegisterComponent;