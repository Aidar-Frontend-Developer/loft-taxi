import React from 'react';

import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';

import {
    StyledSignup,
    StyledHeading,
    StyledForm,
    SubmitButton,
    StyledTypography,
} from './StyledSignup';

const Signup = ({ onSubmitForm, onChangeToLogin }) => (
    <StyledSignup data-testid="signup">
        <StyledHeading variant="h1">Регистрация</StyledHeading>
        <StyledTypography component="p" paragraph={true}>
            Уже зарегистрированы?&nbsp;
            <Link onClick={onChangeToLogin} data-testid="onChangeToLogin">
                Зарегистрируйтесь
            </Link>
        </StyledTypography>
        <StyledForm onSubmit={onSubmitForm}>
            <TextField
                required
                fullWidth
                name="newEmail"
                label="Адрес электронной почты"
                type="email"
                id="newEmail"
                placeholder="Введите адрес"
                defaultValue="test@test.com"
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="newName"
                label="Имя"
                type="text"
                id="newName"
                placeholder="Введите имя"
                defaultValue="Тест"
            />

            <TextField
                margin="normal"
                required
                fullWidth
                name="newSurname"
                label="Фамилия"
                type="text"
                id="newSurname"
                placeholder="Введите фамилию"
                defaultValue="Тест"
            />

            <TextField
                margin="normal"
                required
                fullWidth
                name="newPassword"
                label="Пароль"
                type="password"
                id="newPassword"
                placeholder="Введите пароль"
                defaultValue="123123"
            />
            <SubmitButton
                data-testid="auth-btn"
                type="submit"
                size="medium"
                variant="contained"
                color="primary"
            >
                Зарегистрироваться
            </SubmitButton>
        </StyledForm>
    </StyledSignup>
);

export default Signup;
