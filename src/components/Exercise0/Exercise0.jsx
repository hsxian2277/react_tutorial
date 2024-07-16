import { TextField, Typography, Button } from '@mui/material';
import '../../App.css';
import { useState } from 'react';

// Exercise using useState and some MUI components

export default function Exercise0() {
  const [name, setName] = useState('world');
  const [input, setInput] = useState('');

  // Set text to input
  const handleName = () => {
    if (input === '') {
      alert('Input is required');
    } else {
      setName(input);
      setInput('');
    }
  };

  // Input in textfield
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='exercise0'>
      <div className='display'>
        <Typography variant='h2'>Hello, {name}!</Typography>
      </div>
      <div className='input'>
        <TextField
          required
          id='name-required'
          label='Required'
          placeholder='Enter name'
          name='userInput'
          value = {input}
          onChange={handleInput}
          />
        <Button sx={{marginLeft: '1rem'}} variant="contained" className='change-btn' onClick={handleName}>Change</Button>
      </div>
    </div>
  );
}
