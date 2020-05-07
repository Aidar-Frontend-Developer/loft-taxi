import React from 'react';
import { connect } from 'react-redux';
import { fetchAddressesRequest } from '../../modules/Addresses/actions';
import { fetchRouteRequest } from '../../modules/Routes/actions';

import Grid from '@material-ui/core/Grid';

import { StyledOrderTaxiForm } from './StyledOrderTaxiForm';
import { StyledButton } from '../shared/Button/StyledButton';

import WarningBlock from '../../components/WarningBlock';
import { Field, Form, reduxForm, formValueSelector } from 'redux-form';

import { renderAutocompleteField } from '../formParts/autocomplete';

class OrderTaxiForm extends React.Component {
    state = {
        addressesList: [],
    };

    componentDidMount() {
        this.props.fetchAddressesRequest();
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({ addressesList: this.props.addressesList });
        }
    }

    handleSubmit = values => this.props.fetchRouteRequest(values);

    render() {
        const { addressesList } = this.state;
        const {
            route: { coords },
            cardInfo: { cardAdded },
            handleSubmit,
            pristine,
            submitting,
            invalid,
            addressFrom,
            addressTo,
        } = this.props;

        return (
            <StyledOrderTaxiForm>
                {cardAdded ? (
                    coords.length ? (
                        <WarningBlock
                            titleText="Заказ размещён"
                            descr="Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут."
                            linkText="Сделать новый заказ"
                        />
                    ) : (
                        <Form onSubmit={handleSubmit(this.handleSubmit)}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        required
                                        options={addressesList}
                                        name="addressFrom"
                                        component={renderAutocompleteField}
                                        label="Откуда"
                                        getOptionDisabled={option => option === addressTo}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        required
                                        options={addressesList}
                                        name="addressTo"
                                        component={renderAutocompleteField}
                                        label="Куда"
                                        getOptionDisabled={option => option === addressFrom}
                                    />
                                </Grid>
                            </Grid>

                            <StyledButton
                                data-testid="auth-btn"
                                disabled={pristine || submitting || invalid}
                                type="submit"
                                size="medium"
                                variant="contained"
                                color="primary"
                            >
                                Вызвать такси
                            </StyledButton>
                        </Form>
                    )
                ) : (
                    <WarningBlock
                        titleText="Заполните платежные данные"
                        descr="Укажите информацию о банковской карте, чтобы сделать заказ."
                        linkText="Перейти в профиль"
                        linkUrl="/profile"
                    />
                )}
            </StyledOrderTaxiForm>
        );
    }
}

const selector = formValueSelector('OrderTaxiForm');

const mapStateToProps = state => {
    return {
        addressesList: state.addresses.address,
        addressTo: selector(state, 'addressTo'),
        addressFrom: selector(state, 'addressFrom'),
        cardInfo: state.card,
        route: state.route,
    };
};

const mapDispatchToProps = {
    fetchAddressesRequest,
    fetchRouteRequest,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(
    reduxForm({
        form: 'OrderTaxiForm',
    })(OrderTaxiForm),
);
