import React from 'react';
import Header from '../../Header';
import { connect } from 'react-redux';
import { postCardRequest, getCardRequest } from '../../../modules/Profile/actions';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import {
    StyledForm,
    TitleTypography,
    SubtitleTypography,
    StyledProfile,
    StyledPaper,
} from './StyledProfile';

import { StyledButton } from '../../shared/Button/StyledButton';

class Profile extends React.Component {
    state = {
        token: '',
        cardNumber: '',
        expiryDate: '',
        cardName: '',
        cvc: '',
    };

    componentDidMount() {
        this.setState({ token: this.props.token });
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

    handleSubmit = e => {
        e.preventDefault();
        const { postCardRequest } = this.props;
        postCardRequest(this.state);
    };

    handlerInputChange = event => this.setState({ [event.target.name]: event.target.value });

    render() {
        return (
            <Paper>
                <Header />
                <StyledProfile>
                    <StyledForm onSubmit={this.handleSubmit}>
                        <TitleTypography variant="h4">Профиль</TitleTypography>
                        <SubtitleTypography variant="body1">Способ оплаты</SubtitleTypography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <StyledPaper>
                                    <div className="cardIco"></div>
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        name="cardNumber"
                                        label="Номер карты:"
                                        type="password"
                                        id="cardNumber"
                                        placeholder="Введите номер карты"
                                        onChange={this.handlerInputChange}
                                    />

                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        name="expiryDate"
                                        label="Срок действия:"
                                        type="text"
                                        id="expiryDate"
                                        placeholder="Введите срок действия"
                                        onChange={this.handlerInputChange}
                                    />
                                </StyledPaper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <StyledPaper>
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        name="cardName"
                                        label="Имя владельца:"
                                        type="text"
                                        id="cardName"
                                        placeholder="Введите имя владельца"
                                        onChange={this.handlerInputChange}
                                    />
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        name="cvc"
                                        label="CVC:"
                                        type="password"
                                        id="cvc"
                                        placeholder="Введите CVC"
                                        onChange={this.handlerInputChange}
                                    />
                                </StyledPaper>
                            </Grid>
                        </Grid>
                        <StyledButton
                            type="submit"
                            size="medium"
                            variant="contained"
                            color="primary"
                        >
                            Сохранить
                        </StyledButton>
                        <div className="toolTip"></div>
                    </StyledForm>
                </StyledProfile>
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    cardInfo: state.card,
});

const mapDispatchToProps = {
    postCardRequest,
    getCardRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
