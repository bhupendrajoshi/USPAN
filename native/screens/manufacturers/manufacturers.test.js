import 'react-native';
import React from 'react';
import Manufacturers from './manufacturers';

import renderer from 'react-test-renderer';

describe('Manufacturers component', () => {
    test('it should render correctly', () => {
        const tree = renderer.create(
            <Manufacturers />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
