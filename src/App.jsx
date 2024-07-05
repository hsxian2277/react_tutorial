import './App.css';
import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Exercise0 from './components/Exercise0';
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';
import Exercise3 from './components/Exercise3';
import Exercise4 from './components/Exercise4';
import Exercise5 from './components/Exercise5';

// App containing all the exercises and MUI selector to view one at a time

export default function App() {
  const [exercise, setExercise] = React.useState('');

  const handleChange = (e) => {
    setExercise(e.target.value);
  }

  return (
    <div className='App'>
      <FormControl variant='filled' sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Exercise</InputLabel>
        <Select
          value={exercise}
          onChange={handleChange}
          label='Exercise'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={0}>1</MenuItem>
          <MenuItem value={1}>2</MenuItem>
          <MenuItem value={2}>3</MenuItem>
          <MenuItem value={3}>4</MenuItem>
          <MenuItem value={4}>5</MenuItem>
          <MenuItem value={5}>6</MenuItem>
        </Select>
      </FormControl>
      {/* Render the selected exercise */}
      {(exercise === 0) && <Exercise0 />}
      {(exercise === 1) && <Exercise1 />}
      {(exercise === 2) && <Exercise2 />}
      {(exercise === 3) && <Exercise3 />}
      {(exercise === 4) && <Exercise4 />}
      {(exercise === 5) && <Exercise5 />}
    </div>
  );
}
