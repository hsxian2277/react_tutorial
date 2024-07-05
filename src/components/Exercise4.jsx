import { Typography } from '@mui/material';
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

export default function Exercise4() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers(setUsers);
  }, []);

  return(
    <div className='exercise4'>
      {users.map((user, key) => {
        return <Typography variant='h5' key={key}>{user.name}, {user.email}, {user.role}</Typography>
      })}
    </div>
  )
}