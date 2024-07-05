import { Typography, Button, TextField } from '@mui/material';
import '../App.css';
import { useState, useEffect } from 'react';

// Exercise using useEffect to fetch data needed in rendering

const fetchUsers = (setUsers) => {
  fetch('http://localhost:3000/users')
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => {
      console.log(err);
    });
}

const fetchUser = (id, setUser) => {
  fetch(`http://localhost:3000/users/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setUser(data)
    })
    .catch((err) => {
      console.log(err);
      setUser(undefined);
    });
}

export default function Exercise4() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(undefined);
  const [id, setId] = useState([-1]);
  const [input, setInput] = useState('');

  // Fetch users at render
  useEffect(() => {
    fetchUsers(setUsers);
  }, []);

  // Fetch whenever id changes
  useEffect(() => {
    fetchUser(id, setUser);
  }, [id]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleId = () => {
    if (input === '') {
      alert('Input is required');
    } else {
      setId(input);
      setInput('');
    }
  }

  return(
    <div className='exercise4'>
      {users.map((user, key) => {
        return <Typography variant='h5' key={key}>{user.name}, {user.email}, {user.role}</Typography>
      })}
      <div className='display'>
        {(user) && <Typography variant='h2'>Hello, {user.name}!</Typography>}
      </div>
      <div className='input'>
        <TextField
          required
          id='id-required'
          label='Required'
          placeholder='Enter ID'
          name='userInput'
          value = {input}
          onChange={handleInput}
          />
        <Button sx={{marginLeft: '1rem'}} variant="contained" className='change-btn' onClick={handleId}>Search</Button>
      </div>
    </div>
  )
}