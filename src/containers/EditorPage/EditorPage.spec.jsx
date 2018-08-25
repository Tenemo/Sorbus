import React from 'react';
import HomePage from './EditorPage';

describe('HomePage', () => {
    it('matches snapshot', () => {
        const wrapper = shallow(
            <HomePage />,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
