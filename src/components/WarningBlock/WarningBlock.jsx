import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import { StyledButton } from '../shared/Button';
import { StyledWarningBlock } from './StyledWarningBlock';

export default class WarningBlock extends Component {
    render() {
        const { titleText, descr, linkText, linkUrl = '/' } = this.props;
        return (
            <StyledWarningBlock>
                <Typography variant="h5">{titleText}</Typography>
                <Typography variant="body1">{descr}</Typography>

                <StyledButton
                    to={linkUrl}
                    component={Link}
                    size="medium"
                    variant="contained"
                    color="primary"
                >
                    {linkText}
                </StyledButton>
            </StyledWarningBlock>
        );
    }
}
