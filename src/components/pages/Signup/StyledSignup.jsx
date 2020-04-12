import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const StyledSignup = styled.div`
    margin-left: 200px;
    width: 500px;
    padding: 60px 50px;
    background-color: ${props => props.theme.white};

    @media (max-width: 800px) {
        margin-left: 0;
        margin-top: 20px;
    }
`;

export const StyledHeading = styled(Typography)`
    && {
        margin: 0 0 30px;
        color: ${props => props.theme.darkGray};
        font-size: 36px;
        font-weight: 700;
    }
`;

export const StyledForm = styled.form`
    text-align: right;
`;

export const StyledTypography = styled(Typography)`
    && {
        margin-bottom: 30px;
    }
`;

export const SubmitButton = styled(Button)`
    && {
        align-self: flex-end;
        font-weight: 500;
        border: 0;
        border-radius: 4px;
        background-color: ${props => props.theme.orange};
        padding: 10px;
        margin-top: 16px;
        color: ${props => props.theme.primary};

        &:hover {
            color: ${props => props.theme.white};
        }
    }
`;
