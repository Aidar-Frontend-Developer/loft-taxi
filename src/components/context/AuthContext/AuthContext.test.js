import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { AuthProvider, AuthContext } from './AuthContext';

const mock = () => (
    <AuthProvider>
        <AuthContext.Consumer>
            {({ isLoggedIn, login, logout }) => (
                <>
                    <button type="button" data-testid="login" onClick={login}>
                        Войти
                    </button>
                    <button type="button" data-testid="logout" onClick={logout}>
                        Выйти
                    </button>
                    <div data-testid="is-auth">{String(isLoggedIn)}</div>
                </>
            )}
        </AuthContext.Consumer>
    </AuthProvider>
);

describe('AuthContext', () => {
    it('свойство контекста isLoggedIn равно false', () => {
        const { getByTestId } = render(mock());
        expect(getByTestId('is-auth').textContent).toEqual('false');
    });

    it('при вызове метода контекста login, isLoggedIn становится равным true', () => {
        const { getByTestId } = render(mock());

        fireEvent.click(getByTestId('login'));
        expect(getByTestId('is-auth').textContent).toEqual('true');
    });

    it('при вызове метода контекста logout, isLoggedIn становится равным false', () => {
        const { getByTestId } = render(mock());

        fireEvent.click(getByTestId('logout'));
        expect(getByTestId('is-auth').textContent).toEqual('false');
    });
});
