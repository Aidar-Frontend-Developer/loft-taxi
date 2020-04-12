import React from 'react';
import { shallow } from 'enzyme';
import Map from './Map';

describe('Map', () => {
    it('компонент отрендерился без ошибок', () => {
        const map = shallow(<Map />);

        expect(map).toBeTruthy();
    });
});
