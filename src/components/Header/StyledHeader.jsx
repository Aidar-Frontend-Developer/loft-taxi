import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

export const StyledToolbar = styled(Toolbar)`
    flex-direction: row;
    justify-content: space-between;
    background-color: ${props => props.theme.white};
`;

export const StyledButton = styled(Button)`
    && {
        margin-right: 10px;
        font-weight: 500;

        :last-child {
            margin-right: 0px;
        }
    }
`;
