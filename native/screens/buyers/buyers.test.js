import 'react-native';
import React from 'react';
import Buyers from './buyers';

import renderer from 'react-test-renderer';

describe('Buyers component', () => {
    test('it should render correctly', () => {
        const tree = renderer.create(
            <Buyers />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
