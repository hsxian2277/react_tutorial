import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { Button, Typography } from '@mui/material';

// Task Component for Exercise 5

export const Task = (props) => {
  return (
    // Render background green if completed
    <div className='task' style={{backgroundColor: props.task.completed ? 'green' : 'white'}}>
      <Typography variant='h5'>{props.task.taskName}</Typography>
      <Button
        sx={{marginLeft: '1rem'}}
        variant="contained"
        startIcon={<CheckIcon />}
        onClick={() => {props.handleComplete(props.task.id)}}
        >
        Done
      </Button>
      <Button
        sx={{marginLeft: '1rem'}}
        variant="contained"
        startIcon={<DeleteIcon />}
        onClick={() => {props.handleDelete(props.task.id)}}
        >
        Remove
      </Button>
    </div>
  );
}