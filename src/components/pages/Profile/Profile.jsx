import React from 'react';
import Header from '../../Header';
import { connect } from 'react-redux';
import {
    postCardRequest,
    getCardRequest,
    profileShowWarning,
    profileHideWarning,
} from '../../../modules/Profile/actions';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { Field, Form, reduxForm } from 'redux-form';

import { InputAdornment } from '@material-ui/core';
import { RemoveRedEye } from '@material-ui/icons';

import InfoBlock from '../../../components/InfoBlock';

import {
    TitleTypography,
    SubtitleTypography,
    StyledProfile,
    StyledPaper,
    Wrapper,
    CardLogo,
} from './StyledProfile';

import { StyledButton } from '../../shared/Button/StyledButton';

import { renderTextField } from '../../formParts/textField';

import cardLogo from '../../../assets/images/card-logo.png';

const cardNameFormatter = value => {
    if (!value) return '';
    const onlyLetters = value.replace(/[^A-Za-z\s]/, '');
    return onlyLetters.toUpperCase() || '';
};

const cardNumberFormatter = value => {
    if (!value) return '';

    const onlyNum = value.replace(/[^\d\s]/g, '');
    const reg = /\d{1,4}/g;
    return (
        onlyNum &&
        onlyNum
            .substring(0, 16)
            .match(reg)
            .join(' ')
    );
};

const cardNumberParser = value => {
    if (!value) return '';
    return value.replace(/\s/g, '');
};

const expDateFormatter = value => {
    if (!value || value === '/') return '';
    const onlyNum = value.replace(/[^\d]/g, '');
    if (onlyNum) {
        let month = onlyNum.substring(0, 2);
        let year = onlyNum.substring(2, 4);
        if (+month > 12) month = '12';
        return `${month}/${year}`;
    }

    return '';
};

const cvcFormatter = value => {
    if (!value) return '';

    const onlyNum = value.replace(/[^\d]/, '');
    return onlyNum && onlyNum.substring(0, 3);
};

const profileSyncValidator = values => {
    const requiredFields = ['cardName', 'cardNumber', 'expiryDate', 'cvc'];
    const errors = {};
    requiredFields.forEach(field => {
        if (!values[field]) errors[field] = 'Это обязательное поле';
    });
    if (values['expiryDate']) {
        let month = values['expiryDate'].substring(0, 2);
        let year = values['expiryDate'].substring(3);
        const date = new Date(+('20' + year), +month - 1);
        if (+date < Date.now()) errors['expiryDate'] = 'Дата указана неверно';
    }
    if (!/^\S+\s\S+$/gi.test(values['cardName'])) errors['cardName'] = 'Укажите имя как на карте';
    if (values['cardNumber'] && values['cardNumber'].length < 16)
        errors['cardNumber'] = 'Номер карты должен состоять из 16 цифр';
    if (!/^\d{3}$/gi.test(values['cvc'])) errors['cvc'] = 'CVV должен состоять из 3 цифр';
    return errors;
};
class Profile extends React.Component {
    state = {
        token: '',
        passwordIsMasked: true,
    };

    componentWillUnmount() {
        this.props.profileHideWarning();
    }

    componentDidMount() {
        const { getCardRequest } = this.props;
        getCardRequest(this.props.token);
    }

    componentDidUpdate(prevProps) {
        let { cardInfo } = this.props;
        if (cardInfo !== prevProps.cardInfo) {
            this.setState({
                cardNumber: cardInfo.cardNumber,
                expiryDate: cardInfo.expiryDate,
                cardName: cardInfo.cardName,
                cvc: cardInfo.cvc,
            });
        }
    }

    handleSubmit = values => {
        const { token } = this.props;
        const { postCardRequest, profileShowWarning } = this.props;
        postCardRequest({ ...values, token });
        profileShowWarning();
    };

    togglePasswordMask = () => {
        this.setState(prevState => ({
            passwordIsMasked: !prevState.passwordIsMasked,
        }));
    };

    render() {
        const { passwordIsMasked } = this.state;
        const { cardInfo, handleSubmit, pristine, submitting, invalid } = this.props;

        return (
            <Paper>
                <Header />
                <StyledProfile>
                    <Wrapper>
                        <TitleTypography variant="h4">Профиль</TitleTypography>
                        <SubtitleTypography variant="body1">Способ оплаты</SubtitleTypography>
                        {cardInfo.warning ? (
                            <InfoBlock
                                descr="Платёжные данные обновлены. Теперь вы можете заказывать такси."
                                linkText="Перейти на карту"
                                linkUrl="/map"
                            />
                        ) : (
                            <Form onSubmit={handleSubmit(this.handleSubmit)}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <StyledPaper>
                                            <CardLogo src={cardLogo} alt="cardLogo" />
                                            <Field
                                                required
                                                fullWidth
                                                margin="normal"
                                                name="cardNumber"
                                                component={renderTextField}
                                                label="Номер карты:"
                                                placeholder="Введите номер карты"
                                                format={cardNumberFormatter}
                                                parse={cardNumberParser}
                                            />
                                            <Field
                                                required
                                                fullWidth
                                                margin="normal"
                                                name="expiryDate"
                                                component={renderTextField}
                                                label="Срок действия:"
                                                type="text"
                                                placeholder="__ /__"
                                                format={expDateFormatter}
                                            />
                                        </StyledPaper>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <StyledPaper>
                                            <Field
                                                required
                                                fullWidth
                                                margin="normal"
                                                name="cardName"
                                                component={renderTextField}
                                                label="Имя владельца:"
                                                type="text"
                                                placeholder="Введите имя владельца"
                                                format={cardNameFormatter}
                                            />
                                            <Field
                                                style={{ width: 200 }}
                                                title="3 последние цифры на оборотной стороне карты"
                                                required
                                                margin="normal"
                                                name="cvc"
                                                component={renderTextField}
                                                label="CVC:"
                                                type={passwordIsMasked ? 'password' : 'text'}
                                                placeholder="Введите CVC"
                                                format={cvcFormatter}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <RemoveRedEye
                                                                onClick={this.togglePasswordMask}
                                                            />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </StyledPaper>
                                    </Grid>
                                </Grid>
                                <StyledButton
                                    type="submit"
                                    size="medium"
                                    variant="contained"
                                    color="primary"
                                    disabled={pristine || submitting || invalid}
                                >
                                    Сохранить
                                </StyledButton>
                            </Form>
                        )}
                    </Wrapper>
                </StyledProfile>
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    cardInfo: state.card,
    initialValues: state.card,
});

const mapDispatchToProps = {
    postCardRequest,
    getCardRequest,
    profileShowWarning,
    profileHideWarning,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(
    reduxForm({
        form: 'Profile',
        validate: profileSyncValidator,
        enableReinitialize: true,
    })(Profile),
);
