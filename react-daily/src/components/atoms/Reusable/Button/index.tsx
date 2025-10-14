import React from 'react';

interface ButtonProps {
  label: string;
  onChange: () => void;
  buttonStyle: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ label, onChange, buttonStyle }) => {
  return (
    <button onClick={onChange} style={buttonStyle}>
      {label}
    </button>
  );
};

export default Button;
