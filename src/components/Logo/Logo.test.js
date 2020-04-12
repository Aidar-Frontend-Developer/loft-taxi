import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('Logo', () => {
    it('компонент отображается корректно', () => {
        const logo = shallow(<Logo />);

        expect(logo).toBeTruthy();
    });

    it('компонент с пропсом colored со значением black возвращает изображение с черной заливкой', () => {
        const logo = shallow(<Logo colored="black" />);

        expect(logo.props()['src']).toBe('black-logo.svg');
    });

    it('компонент с пропсом colored со значением white возвращает изображение с белой заливкой', () => {
        const logo = shallow(<Logo colored="white" />);

        expect(logo.props()['src']).toBe('white-logo.svg');
    });
});
