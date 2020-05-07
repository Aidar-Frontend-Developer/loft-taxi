import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, Form, reduxForm } from 'redux-form';

import { postRegisterRequest, resetErrors } from '../../../modules/Auth/actions';

import Alert from '@material-ui/lab/Alert';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import { StyledSignup, StyledHeading, StyledTypography } from './StyledSignup';
import { StyledButton } from '../../shared/Button/StyledButton';

import { renderTextField } from '../../formParts/textField';

class Signup extends Component {
    componentWillUnmount() {
        this.props.resetErrors();
    }

    handleSubmitForm = values => {
        this.props.postRegisterRequest(values);
    };

    render() {
        const {
            auth: { isAuthorized, error },
            onChangeToLogin,
            handleSubmit,
            pristine,
            submitting,
            invalid,
        } = this.props;

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
                <Form onSubmit={handleSubmit(this.handleSubmitForm)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Field
                                required
                                fullWidth
                                margin="normal"
                                name="email"
                                type="email"
                                component={renderTextField}
                                label="Адрес электронной почты"
                                placeholder="Введите адрес"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field
                                required
                                fullWidth
                                margin="normal"
                                name="name"
                                component={renderTextField}
                                label="Имя"
                                placeholder="Введите имя"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field
                                required
                                fullWidth
                                margin="normal"
                                name="surname"
                                component={renderTextField}
                                label="Фамилия"
                                placeholder="Введите фамилию"
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
                        Зарегистрироваться
                    </StyledButton>
                </Form>
            </StyledSignup>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});

const mapDispatchToProps = {
    postRegisterRequest,
    resetErrors,
};

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Введите логин';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Неверный логин';
    }
    if (!values.name) errors.name = 'Введите имя';
    if (!values.surname) errors.surname = 'Введите фамилию';
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
    })(Signup),
);
