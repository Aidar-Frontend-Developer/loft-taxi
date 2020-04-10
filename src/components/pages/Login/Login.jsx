import React from 'react';

import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';

import {
    StyledLogin,
    StyledHeading,
    StyledForm,
    SubmitButton,
    StyledTypography,
} from './StyledLogin';

const Login = ({ onSubmitForm, onChangeToSignup }) => (
    <StyledLogin data-testid="login">
        <StyledHeading variant="h1">Войти</StyledHeading>
        <StyledTypography component="p" paragraph={true}>
            Новый пользователь?&nbsp;
            <Link onClick={onChangeToSignup} data-testid="onChangeToSignup">
                Зарегистрируйтесь
            </Link>
        </StyledTypography>
        <StyledForm onSubmit={onSubmitForm}>
            <TextField
                required
                fullWidth
                name="firstName"
                label="Имя пользователя"
                type="text"
                id="firstName"
                placeholder="Введите имя"
                defaultValue="test@test.com"
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
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
                Войти
            </SubmitButton>
        </StyledForm>
    </StyledLogin>
);

export default Login;
