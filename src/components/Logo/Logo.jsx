import React from 'react';
import PropTypes from 'prop-types';

import { StyledLogo } from './StyledLogo';

import logo from '../../assets/images/black-logo.svg';
import logoWhite from '../../assets/images/white-logo.svg';

const Logo = ({ colored }) => (
    <StyledLogo src={colored === 'white' ? logoWhite : logo} alt="Loft Taxi" />
);

Logo.propTypes = {
    colored: PropTypes.oneOf(['black', 'white']).isRequired,
};

Logo.defaultProps = {
    colored: 'black',
};

export default Logo;
