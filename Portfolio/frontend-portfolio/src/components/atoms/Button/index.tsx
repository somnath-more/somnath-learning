import React from "react";
import { ButtonProps } from "@mui/material";
import { Button as MuiButton } from "@mui/material";

interface MuiButtonProps extends ButtonProps {
  text: string;
}

const Button = ({ text, ...buttonProps }: MuiButtonProps) => {
  return <MuiButton {...buttonProps}>{text}</MuiButton>;
};

export default Button;
