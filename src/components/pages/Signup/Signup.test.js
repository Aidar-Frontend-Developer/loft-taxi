import React from 'react';
import { render } from '@testing-library/react';
import Signup from './Signup';

describe('Signup', () => {
    it('компонент отображается корректно', () => {
        const { queryByTestId } = render(<Signup />);

        expect(queryByTestId('signup')).toBeTruthy();
    });
});
