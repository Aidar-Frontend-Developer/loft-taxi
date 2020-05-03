import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import { StyledButton } from '../shared/Button';
import { StyledInfoBlock } from './StyledInfoBlock';

export default class InfoBlock extends Component {
    render() {
        const { descr, linkText, linkUrl = '/' } = this.props;
        return (
            <StyledInfoBlock>
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
            </StyledInfoBlock>
        );
    }
}
