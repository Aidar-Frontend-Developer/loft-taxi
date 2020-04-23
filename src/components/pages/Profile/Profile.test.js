import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import Profile from './Profile';

const mockStore = configureMockStore();
const store = mockStore({
    auth: { isAuthorized: true },
});

describe('Компонент Profile', () => {
    it('отрендерился без ошибок', () => {
        const profile = shallow(<Profile store={store} />);

        expect(profile).toBeTruthy();
    });
});
