import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export const renderAutocompleteField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (
    <Autocomplete
        label={label}
        placeholder={label}
        // getOptionDisabled={option => option === this.state.addressTo}
        {...input}
        onChange={(event, value) => input.onChange(value)}
        {...custom}
        renderInput={params => <TextField {...params} label={label} fullWidth />}
    />
);
