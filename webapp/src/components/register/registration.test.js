/* global expect, it, describe, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';
import Registration from './registration';

describe('Registration component', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <Registration />,
    );
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have buyer radio button', () => {
    expect(component.find('.buyer').length).toEqual(1);
  });

  it('Should have manufacturer radio button', () => {
    expect(component.find('.manufacturer').length).toEqual(1);
  });

  it('Should have next button', () => {
    expect(component.find('.submit').length).toEqual(1);
  });
});
