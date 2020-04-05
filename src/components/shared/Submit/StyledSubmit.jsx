import styled from 'styled-components';

export const StyledSubmit = styled.button`
    align-self: flex-end;
    padding: 15px 50px;
    font-size: 21px;
    font-weight: 400;
    border: 0;
    border-radius: 4px;
    background-color: ${props => props.theme.orange};
`;
