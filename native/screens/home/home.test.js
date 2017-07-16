import 'react-native';
import React from 'react';
import Home from './home';

import renderer from 'react-test-renderer';

describe('Home component', () => {
    test('it should render correctly', () => {
        const mockNavigation = jest.fn();
        const tree = renderer.create(
            <Home navigation={mockNavigation} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
