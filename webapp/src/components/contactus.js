import React, { Component } from 'react';
import serialize from 'form-serialize';
import PropTypes from 'prop-types';

class ContactUsComponent extends Component {

  static propTypes = {
    submitForm: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          const details = serialize(e.target, { hash: true });
          this.props.submitForm(details);
        }}>
          <input type='text' name='name' placeholder='Name' />
          <input type='text' name='email' placeholder='Email' />
          <input type='text' name='phonenumber' placeholder='Phone number' />
          <textarea type='text' name='request' placeholder='Request' />

          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default ContactUsComponent;