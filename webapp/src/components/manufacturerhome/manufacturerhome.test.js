/* global expect, it, describe, jest, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import ManufacturerHome from './manufacturerhome';

describe('BuyerHome component', () => {
  let component;
  const submitMock = jest.fn();

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
