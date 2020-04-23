import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './Signup';
import { mount } from 'enzyme';

import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
const store = mockStore({
    auth: { isAuthorized: false },
});

describe('Компонент Signup', () => {
    it('компонент отображается корректно', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Signup store={store} onSubmit={() => {}} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('содержит два поля для ввода текста', () => {
        const wrapper = mount(<Signup store={store} onSubmit={() => {}} />);
        expect(wrapper.find('input[type="text"]')).toHaveLength(2);
    });
    it('содержит компонент Button', () => {
        const wrapper = mount(<Signup store={store} onSubmit={() => {}} />);
        expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
    });
    it('содержит поле пароля', () => {
        const wrapper = mount(<Signup store={store} onSubmit={() => {}} />);
        expect(wrapper.find('input[type="password"]')).toHaveLength(1);
    });
});
