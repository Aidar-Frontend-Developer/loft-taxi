import styled from 'styled-components';

export const StyledOrderTaxiForm = styled.div`
    width: 490px;
    position: absolute;
    left: 15px;
    top: 80px;
    background-color: ${props => props.theme.white};
    border-radius: 3px;
    padding: 40px 50px;

    button[type='submit'] {
        width: 100%;
        margin-top: 35px;
    }
`;
