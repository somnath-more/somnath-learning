import React from 'react'
import { TextField as MuiTextField, TextFieldProps } from '@mui/material'
interface MuiTextFieldProps extends Omit<TextFieldProps,"variant">{
    label: string;
    placeholder: string;
}
const TextField = ({label, placeholder, ...props}:MuiTextFieldProps) => {
  return (
    <MuiTextField label={label} placeholder={placeholder} {...props}/>
  )
}

export default TextField