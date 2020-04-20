import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { removeItems } from '../services/localStorage';

import { postLogOut } from '../../modules/Auth/actions';

import AppBar from '@material-ui/core/AppBar';

import Logo from '../Logo';
import { StyledToolbar, StyledButton } from './StyledHeader';

const Header = ({ postLogOut, location: { pathname } }) => {
    const handleCkickLogout = event => {
        event.preventDefault();

        removeItems('user');
        postLogOut({ success: false, error: '' });
    };

    return (
        <AppBar position="static" color="primary" elevation={0} data-testid="header">
            <StyledToolbar>
                <Link to="/">
                    <Logo colored="black" />
                </Link>

                <nav>
                    <StyledButton
                        component={Link}
                        to="/map"
                        variant={'/map' === pathname ? 'contained' : 'text'}
                    >
                        Карта
                    </StyledButton>
                    <StyledButton
                        component={Link}
                        to="/profile"
                        variant={'/profile' === pathname ? 'contained' : 'text'}
                    >
                        Профиль
                    </StyledButton>
                    <StyledButton component={Link} to="/" onClick={handleCkickLogout}>
                        Выйти
                    </StyledButton>
                </nav>
            </StyledToolbar>
        </AppBar>
    );
};

const mapDispatchToProps = {
    postLogOut,
};

export default withRouter(connect(null, mapDispatchToProps)(Header));
