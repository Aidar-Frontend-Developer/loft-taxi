import styled from 'styled-components';

export const StyledInput = styled.input`
    margin-bottom: 40px;
    width: 100%;
    padding: 8px 0;
    font-size: 16px;
    border: 0;
    border-bottom: 2px solid ${props => props.theme.lightGray};
    transition: border-color 0.4s;

    &:hover {
        border-color: ${props => props.theme.secondary};
    }

    &:focus {
        outline: none;
        border-color: ${props => props.theme.secondary};
    }
`;
