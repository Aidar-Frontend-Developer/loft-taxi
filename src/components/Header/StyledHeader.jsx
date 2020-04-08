import styled from 'styled-components';

export const Wrapper = styled.header`
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    -ms-flex-align: center;
    background-color: ${props => props.theme.lightGray};
    height: 85px;
`;

export const Button = styled.button`
    padding: 10px 15px;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    background-color: ${props => (props.active ? props.theme.orange : 'transparent')};
    border-radius: 10px;
    outline: none;
    border: none;
`;

export const List = styled.ul`
    display: flex;
    list-style-type: none;
`;

export const Item = styled.li`
    padding-left: 35px;
    list-style-type: none;
`;
