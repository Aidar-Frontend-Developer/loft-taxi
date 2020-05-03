import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { postLoginRequest, postLoginSuccess } from '../../../modules/Auth/actions';

import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { StyledButton } from '../../shared/Button/StyledButton';

import { StyledLogin, StyledHeading, StyledForm, StyledTypography } from './StyledLogin';

class Login extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChangeInput = event => this.setState({ [event.target.name]: event.target.value });

    handleSubmitForm = event => {
        event.preventDefault();
        this.props.postLoginRequest(this.state);
    };

    render() {
        const { isAuthorized, onChangeToSignup, error } = this.props;
        return isAuthorized ? (
            <Redirect to="/map" />
        ) : (
            <StyledLogin data-testid="login">
                <StyledHeading variant="h1">Войти</StyledHeading>
                <StyledTypography component="p" paragraph={true}>
                    Новый пользователь?&nbsp;
                    <Link onClick={onChangeToSignup} data-testid="onChangeToSignup">
                        Зарегистрируйтесь
                    </Link>
                </StyledTypography>
                <StyledForm onSubmit={this.handleSubmitForm}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                error={!!error}
                                margin="normal"
                                required
                                fullWidth
                                name="email"
                                label="Имя пользователя"
                                type="email"
                                id="email"
                                placeholder="Введите имя"
                                onChange={this.handleChangeInput}
                                helperText={error && 'Неверный логин'}
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
                        Войти
                    </StyledButton>
                </StyledForm>
            </StyledLogin>
        );
    }
}

const mapStateToProps = state => ({
    isAuthorized: state.auth.isAuthorized,
    error: state.auth.error,
});

const mapDispatchToProps = {
    postLoginRequest,
    postLoginSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
