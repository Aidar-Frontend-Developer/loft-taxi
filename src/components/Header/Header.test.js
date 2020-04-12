import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

console.error = jest.fn();

describe('Header', () => {
    it('компонент отображается корректно', () => {
        const { queryByTestId } = render(<Header />);

        expect(console.error).toHaveBeenCalledTimes(1);
        expect(queryByTestId('header')).toBeTruthy();
    });
});
