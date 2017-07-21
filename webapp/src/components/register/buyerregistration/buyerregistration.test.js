/* global expect, it, describe, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';
import BuyerRegistration from './buyerregistration';

describe('BuyerRegistration component', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <BuyerRegistration />,
    );
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have register button', () => {
    expect(component.find('.submit').length).toEqual(1);
  });
});
