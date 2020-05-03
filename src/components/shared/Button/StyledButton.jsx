import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const StyledButton = styled(Button)`
    && {
        align-self: flex-end;
        font-weight: 400;
        border: 0;
        border-radius: 4px;
        background-color: ${props => props.theme.orange};
        padding: 10px;
        margin-top: 16px;
        color: ${props => props.theme.primary};
        font-size: 14px;
        padding: 5px 30px;
        letter-spacing: 0.1px;
        text-transform: inherit;

        &:hover {
            color: ${props => props.theme.white};
        }
    }
`;
