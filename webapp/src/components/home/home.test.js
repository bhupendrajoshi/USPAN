/* global expect, it, describe, jest, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from './home';

describe('Home component', () => {
  let component;
  const submitMock = jest.fn();

  beforeEach(() => {
    component = shallow(
      <Home />,
    );
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have buyer button', () => {
    expect(component.find('.buyer').length).toEqual(1);
  });

  it('Should have manufacturer button', () => {
    expect(component.find('.manufacturer').length).toEqual(1);
  });
});
