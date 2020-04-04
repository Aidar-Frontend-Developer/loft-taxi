import styled from 'styled-components';
import loginBackround from '../../../assets/images/login-background.png';

export const StyledLogin = styled.div`
    min-height: 100vh;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('${loginBackround}');
    background-size: cover;
    background-position: center;
    
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const FormContainer = styled.div`
    margin-left: 200px;
    width: 500px;
    padding: 60px 50px;
    background-color: ${props => props.theme.white};

    @media (max-width: 800px) {
        margin-left: 0;
        margin-top: 20px;
    }
`;

export const Text = styled.div`
    margin-bottom: 40px;
`;

export const Link = styled.a`
    color: ${props => props.theme.secondary};
    font-size: 16px;
    font-weight: 400;
    border: none;
    background: none;
`;

export const Label = styled.label`
    margin-bottom: 8px;
    display: block;
    color: ${props => props.theme.gray};
    font-size: 15px;
    font-weight: 400;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
