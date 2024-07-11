import { Typography, Button, TextField } from '@mui/material';
import '../App.css';
import { useState, useEffect } from 'react';

// Exercise using useEffect to fetch data needed in rendering

const fetchEvents = (setEvents) => {
  fetch('http://localhost:3000/events')
    .then((res) => res.json())
    .then((data) => setEvents(data))
    .catch((err) => {
      console.log(err);
    });
}

const fetchEvent = (id, setEvent) => {
  fetch(`http://localhost:3000/events/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setEvent(data)
    })
    .catch((err) => {
      console.log(err);
      setEvent(undefined);
    });
}

export default function Exercise4() {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState(undefined);
  const [id, setId] = useState([-1]);
  const [input, setInput] = useState('');

  // Fetch events at render
  useEffect(() => {
    fetchEvents(setEvents);
  }, []);

  // Fetch whenever id changes
  useEffect(() => {
    fetchEvent(id, setEvent);
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
      {events.map((event, key) => {
        return <Typography variant='h5' key={key}>{event.eventName}</Typography>
      })}
      <div className='display'>
        {(event) && <Typography variant='h2'>Hello, {event.eventName}!</Typography>}
      </div>
      <div className='input'>
        <TextField
          required
          id='id-required'
          label='Required'
          placeholder='Enter ID'
          name='eventInput'
          value = {input}
          onChange={handleInput}
          />
        <Button sx={{marginLeft: '1rem'}} variant="contained" className='change-btn' onClick={handleId}>Search</Button>
      </div>
    </div>
  )
}