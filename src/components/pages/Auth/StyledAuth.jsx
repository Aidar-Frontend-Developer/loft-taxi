import styled from 'styled-components';
import loginBackround from '../../../assets/images/login-background.png';

export const StyledAuth = styled.div`
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
