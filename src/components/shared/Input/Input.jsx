import React from 'react';
import { StyledInput } from './StyledInput';

const Input = ({ type, id, placeholder }) => (
    <StyledInput type={type} id={id} placeholder={placeholder} />
);

export default Input;
