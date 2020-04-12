import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Main from './Main';
import { pages } from '../../Header';
import { AuthProvider } from '../../context/AuthContext';

describe('Main', () => {
    it('при клике на кнопки форм Войти или Зарегистрироваться осуществляется переход на основную страницу', () => {
        const { getByText, getByTestId, queryByTestId } = render(
            <AuthProvider>
                <Main />
            </AuthProvider>,
        );

        fireEvent.submit(getByTestId('auth-btn'));

        expect(getByText('Загрузка...')).toBeTruthy();
        expect(queryByTestId('auth-page')).toBeFalsy();
    });

    it('при клике на кнопку Выйти в меню осуществляется переход на страницу авторизации', () => {
        const { getByTestId, queryByTestId } = render(
            <AuthProvider>
                <Main />
            </AuthProvider>,
        );
        const { page } = pages[2];

        fireEvent.submit(getByTestId('auth-btn'));
        fireEvent.click(getByTestId(`${page}-btn`));
        expect(queryByTestId('layout')).toBeFalsy();
        expect(queryByTestId('auth-page')).toBeTruthy();
    });
});
