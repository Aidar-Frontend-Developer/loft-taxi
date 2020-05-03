import React from 'react';
import { connect } from 'react-redux';
import { fetchAddressesRequest } from '../../modules/Addresses/actions';
import { fetchRouteRequest } from '../../modules/Routes/actions';

import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { StyledOrderTaxiForm } from './StyledOrderTaxiForm';
import { StyledButton } from '../shared/Button/StyledButton';

import WarningBlock from '../../components/WarningBlock';

class OrderTaxiForm extends React.Component {
    state = {
        addressFrom: '',
        addressTo: '',
        addressesList: [],
    };

    componentDidMount() {
        const { fetchAddressesRequest } = this.props;
        fetchAddressesRequest();
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({ addressesList: this.props.addressesList });
        }
    }

    handleChangeSelect = (stateName, value = '') => {
        this.setState({ [stateName]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { fetchRouteRequest } = this.props;
        const { addressFrom, addressTo } = this.state;

        fetchRouteRequest({ addressFrom, addressTo });
    };

    render() {
        const { addressesList } = this.state;
        const {
            route: { coords },
            cardInfo: { cardAdded },
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
                        <form onSubmit={this.handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        getOptionDisabled={option =>
                                            option === this.state.addressTo
                                        }
                                        options={addressesList}
                                        onChange={(event, value) =>
                                            this.handleChangeSelect('addressFrom', value)
                                        }
                                        renderInput={params => (
                                            <TextField {...params} type="text" label="Откуда" />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        getOptionDisabled={option =>
                                            option === this.state.addressFrom
                                        }
                                        options={addressesList}
                                        onChange={(event, value) =>
                                            this.handleChangeSelect('addressTo', value)
                                        }
                                        renderInput={params => (
                                            <TextField {...params} type="text" label="Куда" />
                                        )}
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
                                Вызвать такси
                            </StyledButton>
                        </form>
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

const mapStateToProps = state => ({
    addressesList: state.addresses.address,
    cardInfo: state.card,
    route: state.route,
});

const mapDispatchToProps = {
    fetchAddressesRequest,
    fetchRouteRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderTaxiForm);
