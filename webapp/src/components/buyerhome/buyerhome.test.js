/* global expect, it, describe, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';
import BuyerHome from './buyerhome';

describe('BuyerHome component', () => {
  let component;

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
