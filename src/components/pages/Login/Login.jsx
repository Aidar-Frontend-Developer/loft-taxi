import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, Form, reduxForm } from 'redux-form';

import { postLoginRequest, postLoginSuccess, resetErrors } from '../../../modules/Auth/actions';

import Alert from '@material-ui/lab/Alert';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import { StyledLogin, StyledHeading, StyledTypography } from './StyledLogin';
import { StyledButton } from '../../shared/Button/StyledButton';

import { renderTextField } from '../../formParts/textField';

class Login extends Component {
    componentWillUnmount() {
        this.props.resetErrors();
    }

    handleSubmitForm = values => {
        this.props.postLoginRequest(values);
    };

    render() {
        const {
            auth: { isAuthorized, error },
            onChangeToSignup,
            handleSubmit,
            pristine,
            submitting,
            invalid,
        } = this.props;
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
                <Form onSubmit={handleSubmit(this.handleSubmitForm)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Field
                                required
                                fullWidth
                                margin="normal"
                                name="email"
                                component={renderTextField}
                                label="Имя пользователя"
                                placeholder="Введите имя"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                required
                                fullWidth
                                margin="normal"
                                name="password"
                                component={renderTextField}
                                label="Пароль"
                                type="password"
                                placeholder="Введите пароль"
                            />
                        </Grid>
                    </Grid>
                    {error && (
                        <Alert style={{ marginTop: '8px' }} severity="error">
                            {error}
                        </Alert>
                    )}
                    <StyledButton
                        data-testid="auth-btn"
                        type="submit"
                        size="medium"
                        variant="contained"
                        color="primary"
                        disabled={pristine || submitting || invalid}
                    >
                        Войти
                    </StyledButton>
                </Form>
            </StyledLogin>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});

const mapDispatchToProps = {
    postLoginRequest,
    postLoginSuccess,
    resetErrors,
};

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Введите логин';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Неверный логин';
    }
    if (!values.password) errors.password = 'Введите пароль';
    return errors;
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(
    reduxForm({
        form: 'LoginForm',
        validate,
    })(Login),
);
