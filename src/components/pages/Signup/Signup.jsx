import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { postRegisterRequest } from '../../../modules/Auth/actions';

import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import { StyledSignup, StyledHeading, StyledForm, StyledTypography } from './StyledSignup';
import { StyledButton } from '../../shared/Button/StyledButton';

class Signup extends Component {
    state = {
        email: '',
        name: '',
        surname: '',
        password: '',
    };

    handleChangeInput = event => this.setState({ [event.target.name]: event.target.value });

    handleSubmit = event => {
        event.preventDefault();
        const { postRegisterRequest } = this.props;
        postRegisterRequest(this.state);
    };

    render() {
        const { isAuthorized, onChangeToLogin, error } = this.props;
        return isAuthorized ? (
            <Redirect to="/map" />
        ) : (
            <StyledSignup data-test="signup">
                <StyledHeading variant="h1">Регистрация</StyledHeading>
                <StyledTypography component="p" paragraph={true}>
                    Уже зарегистрирован?&nbsp;
                    <Link onClick={onChangeToLogin} data-testid="onChangeToLogin">
                        Войти
                    </Link>
                </StyledTypography>
                <StyledForm onSubmit={this.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                error={!!error}
                                required
                                fullWidth
                                name="email"
                                label="Адрес электронной почты"
                                type="email"
                                id="email"
                                placeholder="Введите адрес"
                                onChange={this.handleChangeInput}
                                helperText={error && 'Неверный адрес электронной почты'}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={!!error}
                                margin="normal"
                                required
                                fullWidth
                                name="name"
                                label="Имя"
                                type="text"
                                id="name"
                                placeholder="Введите имя"
                                onChange={this.handleChangeInput}
                                helperText={error && 'Неверно введено имя'}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={!!error}
                                margin="normal"
                                required
                                fullWidth
                                name="surname"
                                label="Фамилия"
                                type="text"
                                id="surname"
                                placeholder="Введите фамилию"
                                onChange={this.handleChangeInput}
                                helperText={error && 'Неверно введена фамилия'}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={!!error}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Пароль"
                                type="password"
                                id="password"
                                placeholder="Введите пароль"
                                onChange={this.handleChangeInput}
                                helperText={error && 'Неверный пароль'}
                            />
                        </Grid>
                    </Grid>
                    <StyledButton
                        data-testid="auth-btn"
                        type="submit"
                        size="medium"
                        variant="contained"
                        color="primary"
                    >
                        Зарегистрироваться
                    </StyledButton>
                </StyledForm>
            </StyledSignup>
        );
    }
}

const mapStateToProps = state => ({
    isAuthorized: state.auth.isAuthorized,
    error: state.auth.error,
});

const mapDispatchToProps = {
    postRegisterRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
