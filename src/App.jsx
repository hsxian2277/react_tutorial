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
import Exercise6 from './components/Exercise6';
import Exercise7 from './components/Exercise7';
import Exercise8 from './components/Exercise8';
import Exercise9 from './components/Exercise9';
import Exercise10 from './components/Exercise10';
import Exercise11 from './components/Exercise11';
import Exercise12 from './components/Exercise12';

// App containing all the exercises and MUI selector to view one at a time

export default function App() {
  const [exercise, setExercise] = React.useState('');
  const exerciseCount = 13;
  const [nums, setNums] = React.useState([]);

  React.useEffect(() => {
    const tempNums = [];
    for (let i = 0; i < exerciseCount; i++) {
      tempNums.push(i);
    }
    setNums(tempNums);
  }, []);

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

          {nums.map((num) => {
            return <MenuItem key={num} value={num}>{num + 1}</MenuItem>
          })}
        </Select>
      </FormControl>
      {/* Render the selected exercise */}
      {(exercise === 0) && <Exercise0 />}
      {(exercise === 1) && <Exercise1 />}
      {(exercise === 2) && <Exercise2 />}
      {(exercise === 3) && <Exercise3 />}
      {(exercise === 4) && <Exercise4 />}
      {(exercise === 5) && <Exercise5 />}
      {(exercise === 6) && <Exercise6 />}
      {(exercise === 7) && <Exercise7 />}
      {(exercise === 8) && <Exercise8 />}
      {(exercise === 9) && <Exercise9 />}
      {(exercise === 10) && <Exercise10 />}
      {(exercise === 11) && <Exercise11 />}
      {(exercise === 12) && <Exercise12 />}
    </div>
  );
}
