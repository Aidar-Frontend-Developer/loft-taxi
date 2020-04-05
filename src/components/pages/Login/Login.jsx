import React, { Component } from 'react';

import Logo from '../../shared/Logo';
import Heading from '../../shared/Heading';
import Input from '../../shared/Input';
import Submit from '../../shared/Submit';

import { StyledLogin, Form, FormContainer, Text, Link, Label } from './StyledLogin';

class Login extends Component {
    handleSubmit = event => {
        event.preventDefault();
        this.props.setPage('map');
    };

    showSignupPage = () => this.props.setPage('signup');

    render() {
        return (
            <StyledLogin>
                <Logo />
                <FormContainer>
                    <Heading title="Войти" />
                    <Text>
                        Новый пользователь?&nbsp;
                        <Link onClick={this.showSignupPage}>Зарегистрируйтесь</Link>
                    </Text>
                    <Form onSubmit={this.handleSubmit}>
                        <Label htmlFor="username">Имя пользователя*</Label>
                        <Input type="text" id="username" placeholder="Введите имя" />
                        <Label htmlFor="password">Пароль*</Label>
                        <Input type="password" id="password" placeholder="Введите пароль" />
                        <Submit name="Войти" />
                    </Form>
                </FormContainer>
            </StyledLogin>
        );
    }
}

export default Login;
