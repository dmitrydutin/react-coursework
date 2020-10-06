import React from 'react'
import TextField from '@material-ui/core/TextField'

export const renderField = ({ label, input, meta: { touched, invalid, error }, ...custom }) => (
    <TextField
        label={label}
        error={touched && invalid}
        helperText={touched && error}
        variant='outlined'
        {...input}
        {...custom}
    />
)

export const renderSelectField = ({
    input,
    label,
    meta: { touched, invalid, error },
    children,
    ...custom
}) => (
    <TextField
        label={label}
        error={touched && invalid}
        helperText={touched && error}
        variant='outlined'
        select
        {...input}
        {...custom}
    >
        {children}
    </TextField>
)
