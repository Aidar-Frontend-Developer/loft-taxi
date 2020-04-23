import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Auth from './Auth';

const mockStore = configureMockStore();
const store = mockStore({
    auth: { isAuthorized: false },
});

describe('Компонент Auth', () => {
    const component = (
        <Provider store={store}>
            <Auth />
        </Provider>
    );

    it('компонент отображается корректно', () => {
        const div = document.createElement('div');
        ReactDOM.render(component, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('при инициализации не рендерит форму регистрации', () => {
        const { queryByTestId } = render(component);

        expect(queryByTestId('signup')).toBeFalsy();
    });

    it(
        'при клике на "Войти" в контейнере регистрации просходит переключение с ' +
            'контейнера регистрации на контейнер входа',
        () => {
            const { getByTestId, queryByTestId } = render(component);

            fireEvent.click(getByTestId('onChangeToSignup'));
            fireEvent.click(getByTestId('onChangeToLogin'));
            expect(queryByTestId('login')).toBeTruthy();
        },
    );
});
