import React, { Component } from 'react';

import Logo from '../../shared/Logo';
import Heading from '../../shared/Heading';
import Input from '../../shared/Input';
import Submit from '../../shared/Submit';

import { StyledSignup, Form, FormContainer, Text, Button, Label } from './StyledSignup';

class SingUp extends Component {
    handleSubmit = event => {
        event.preventDefault();
        this.props.setPage('map');
    };

    showLoginPage = () => this.props.setPage('login');

    render() {
        return (
            <StyledSignup>
                <Logo />
                <FormContainer>
                    <Heading title="Войти" />
                    <Text>
                        Уже зарегистрирован?&nbsp;
                        <Button onClick={this.showLoginPage}>Войти</Button>
                    </Text>
                    <Form onSubmit={this.handleSubmit}>
                        <Label htmlFor="newEmail">Адрес электронной почты</Label>
                        <Input type="email" id="newEmail" placeholder="Введите адрес" />
                        <Label htmlFor="newName">Имя</Label>
                        <Input type="text" id="newName" placeholder="Введите имя" />
                        <Label htmlFor="newSurname">Фамилия</Label>
                        <Input type="text" id="newSurname" placeholder="Введите фамилию" />
                        <Label htmlFor="newPassword">Пароль</Label>
                        <Input type="password" id="newPassword" placeholder="Введите пароль" />
                        <Submit name="Зарегистрироваться" />
                    </Form>
                </FormContainer>
            </StyledSignup>
        );
    }
}

export default SingUp;
