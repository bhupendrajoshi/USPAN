/* global expect, it, describe, jest, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';
import ManufacturerHome from './manufacturerhome';

describe('BuyerHome component', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <ManufacturerHome />,
    );
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have buyer as title', () => {
    expect(component.find('.title').length).toEqual(1);
  });
});
