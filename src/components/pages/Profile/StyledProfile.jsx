import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import profileBackround from '../../../assets/images/profile-background.png';

export const StyledProfile = styled(Paper)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 64px);
    background-image: url('${profileBackround}');
`;

export const StyledForm = styled.form`
    max-width: 950px;
    padding: 60px 70px;
    background-color: ${props => props.theme.white};
    border-radius: 3px;
`;

export const Wrapper = styled.div`
    text-align: center;
    max-width: 950px;
    padding: 60px 70px;
    background-color: ${props => props.theme.white};
    border-radius: 3px;
`;

export const TitleTypography = styled(Typography)``;

export const SubtitleTypography = styled(Typography)`
    && {
        margin-bottom: 40px;
    }
`;

export const StyledPaper = styled(Paper)`
    && {
        padding: 30px;
        margin-bottom: 50px;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        padding: 40px 30px;
        border-radius: 10px;
        min-height: 270px;
        position: relative;
        text-align: left;
    }
`;

export const SubmitButton = styled(Button)`
    && {
        align-self: flex-end;
        font-weight: 400;
        border: 0;
        border-radius: 4px;
        background-color: ${props => props.theme.orange};
        padding: 10px;
        margin-top: 16px;
        color: ${props => props.theme.primary};
        font-size: 20px;
        padding: 5px 30px;
        letter-spacing: 0.1px;
        text-transform: inherit;

        &:hover {
            color: ${props => props.theme.white};
        }
    }
`;

export const CardLogo = styled.img`
    position: absolute;
    right: 20px;
    top: 30px;
`;
