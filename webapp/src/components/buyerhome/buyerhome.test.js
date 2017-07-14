/* global expect, it, describe, jest, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import BuyerHome from './buyerhome';

describe('BuyerHome component', () => {
  let component;
  const submitMock = jest.fn();

  beforeEach(() => {
    component = shallow(
      <BuyerHome />,
    );
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have buyer as title', () => {
    expect(component.find('.title').length).toEqual(1);
  });
});
