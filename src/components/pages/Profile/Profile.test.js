import React from 'react';
import { shallow } from 'enzyme';
import Profile from './Profile';

describe('Profile', () => {
    it('компонент отрендерился без ошибок', () => {
        const profile = shallow(<Profile />);

        expect(profile).toBeTruthy();
    });
});
