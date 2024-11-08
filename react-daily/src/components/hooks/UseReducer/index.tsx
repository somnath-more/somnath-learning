import { Box, Typography } from '@mui/material';
import React, { useReducer } from 'react';
import TextField from '../../atoms/TextField';
import Button from '../../atoms/Button';

interface InitialStateProps {
  name: string;
  email: string;
}

const initialState: InitialStateProps = {
  name: "",
  email: "",
};

type Action = 
  | { type: 'NAME'; payload: string }
  | { type: 'EMAIL'; payload: string }
  | { type: 'SUBMIT' };

const reducer = (state: InitialStateProps, action: Action): InitialStateProps => {
  switch (action.type) {
    case 'NAME':
      return { ...state, name: action.payload };
    case 'EMAIL':
      return { ...state, email: action.payload };
    case 'SUBMIT':
      return initialState;
    default:
      return state;
  }
};
//  reducer function will return state object

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFormSubmit = () => {
    alert(`${state.name} ${state.email}`);
    dispatch({ type:'SUBMIT'})
  };

  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px',
    margin: 'auto',
    padding: '2rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
    backgroundColor: '#f5f5f5',
    '& input': {
      width: '100%',
    },
    '& button': {
      marginTop: '1rem',
    },
  };

  return (
    <Box sx={boxStyle}>
      <Typography>Enter a Name:</Typography>
      <TextField
        value={state.name}
        placeholder="Enter name"
        onChange={(e) => dispatch({ type: 'NAME', payload: e.target.value })}
      />
      <Typography>Enter an Email:</Typography>
      <TextField
        value={state.email}
        placeholder="Enter email"
        onChange={(e) => dispatch({ type: 'EMAIL', payload: e.target.value })}
      />
      <Button text="Submit Form" variant="contained" onClick={handleFormSubmit} />
    </Box>
  );
}

export default Reducer;
