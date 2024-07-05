import '../App.css';
import { Task } from './Task';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';

// Exercise of a todo app with CRUD operations

export default function Exercise5() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  // Keep track of inputs
  const handleInput = (e) => {
    setInput(e.target.value);
  }

  // Add task
  const handleAdd = () => {
    if (input === '') {
      alert('Task is empty');
    } else {
      const task = {
        id: uuidv4(),
        taskName: input,
        completed: false,
      }
      setTasks([...tasks, task]);
      setInput('');
    }
  }

  // Delete a task using id
  const handleDelete = (id) => {
    setTasks(tasks.filter((ele) => ele.id !== id))
  }

  // Change task property using id
  const handleComplete = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        task.completed = true;
      }
      return task;
    }));
  }

  return (
    <div className='exercise5'>
      <div className='addTask'>
        <TextField
          required
          id='task-required'
          label='Required'
          placeholder='Enter task'
          name='userInput'
          value={input}
          onChange={handleInput}
          />
        <Button
          sx={{marginLeft: '1rem', marginTop: '10px'}}
          variant="contained"
          onClick={handleAdd}
          startIcon={<AddIcon />}
          >
          Add
        </Button>
      </div>
      {/* Pass props to Task component to render each task */}
      <div className='list'>
        {tasks.map(((task, key) => {
          return <Task key={key} task={task} handleDelete={handleDelete} handleComplete={handleComplete}/>
        }))}
      </div>
    </div>
  );
}
