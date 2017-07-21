/* global expect, it, describe, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';
import Home from './home';

describe('Home component', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <Home />,
    );
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have register button', () => {
    expect(component.find('.register').length).toEqual(1);
  });
});
