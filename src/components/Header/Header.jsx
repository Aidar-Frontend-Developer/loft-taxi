import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';

import Logo from '../Logo';
import { StyledToolbar, StyledButton } from './StyledHeader';

export const pages = [
    { id: 0, name: 'Карта', page: 'map' },
    { id: 1, name: 'Профиль', page: 'profile' },
    { id: 2, name: 'Выйти', page: 'logout' },
];

const Header = ({ setPage }) => {
    return (
        <AppBar position="static" color="primary" elevation={0} data-testid="header">
            <StyledToolbar>
                <Logo colored="black" />
                <nav>
                    {pages.map(({ id, name, page }) => (
                        <StyledButton
                            key={id}
                            color="default"
                            onClick={() => setPage(page)}
                            data-testid={`${page}-btn`}
                        >
                            {name}
                        </StyledButton>
                    ))}
                </nav>
            </StyledToolbar>
        </AppBar>
    );
};

Header.propTypes = {
    setPage: PropTypes.func.isRequired,
};

export default Header;
