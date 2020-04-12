import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Auth from './Auth';

describe('Auth', () => {
    it('при инициализации рендерится форма входа', () => {
        const { queryByTestId } = render(<Auth />);

        expect(queryByTestId('login')).toBeTruthy();
    });

    it('при инициализации не рендерится форма регистрации', () => {
        const { queryByTestId } = render(<Auth />);

        expect(queryByTestId('signup')).toBeFalsy();
    });

    it(
        'при клике на "Зарегистрироваться" в контейнере входа просходит переключение с ' +
            'контейнера входа на контейнер регистрации',
        () => {
            const { getByTestId, queryByTestId } = render(<Auth />);

            fireEvent.click(getByTestId('onChangeToSignup'));
            expect(queryByTestId('signup')).toBeTruthy();
        },
    );

    it(
        'при клике на "Войти" в контейнере регистрации просходит переключение с ' +
            'контейнера регистрации на контейнер входа',
        () => {
            const { getByTestId, queryByTestId } = render(<Auth />);

            fireEvent.click(getByTestId('onChangeToSignup'));
            fireEvent.click(getByTestId('onChangeToLogin'));
            expect(queryByTestId('login')).toBeTruthy();
        },
    );
});
