import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Layout from './Layout';
import { pages } from '../../Header';

describe('Layout', () => {
    it('при инициализации открыта стрница с картой', () => {
        const { getByTestId } = render(<Layout />);

        expect(getByTestId('map')).toBeTruthy();
    });

    it('при переключении на карту в header открывается страница с картой', () => {
        const { queryByTestId } = render(<Layout />);
        const { page } = pages[0];

        fireEvent.click(queryByTestId(`${page}-btn`));
        expect(queryByTestId('map')).toBeTruthy();
    });

    it('при переключении на профиль в header открывается страница с профилем', () => {
        const { queryByTestId } = render(<Layout />);
        const { page } = pages[1];

        fireEvent.click(queryByTestId(`${page}-btn`));
        expect(queryByTestId('profile')).toBeTruthy();
    });
});
