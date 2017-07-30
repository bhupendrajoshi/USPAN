import React, { Component } from 'react';
import serialize from 'form-serialize';
import PropTypes from 'prop-types';
import RadioButtonGroup from 'material-ui/RadioButton/RadioButtonGroup';
import RadioButton from 'material-ui/RadioButton/RadioButton';
import TextField from 'material-ui/TextField';

class ContactUsComponent extends Component {

  static propTypes = {
    submitForm: PropTypes.func.isRequired
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const details = serialize(evt.target, { hash: true });
    this.props.submitForm(details);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <TextField type='text' name='name' placeholder='Name' />
            <TextField type='text' name='email' placeholder='Email' />
            <TextField type='text' name='phonenumber' placeholder='Phone number' />

            <RadioButtonGroup name='usertype' style={{ display: 'flex', flexDirection: 'row' }}>
              <RadioButton value='buyer' label='Buyer' style={{ display: 'inline-block' }} />
              <RadioButton value='manufacturer' label='Manufacturer' style={{ display: 'inline-block' }} />
            </RadioButtonGroup>

            <TextField type='text' name='request' placeholder='Request' multiLine={true} rows={4} />

            <button style={{ width: 50 }}>Submit</button>

          </div>
        </form>
      </div>
    )
  }
}

export default ContactUsComponent;