import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RefreshIcon from '@mui/icons-material/Refresh';
import '../../App.css';
import { useState } from 'react';

// Exercise using useState for a counter app

export default function Exercise3() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  }

  const handleDecrease = () => {
    setCount(count - 1);
  }

  const handleZero = () => {
    setCount(0);
  }

  return (
    <div className='exercise3'>
      <Button variant="outlined" onClick={handleIncrease} startIcon={<AddIcon />}>Increase</Button>
      <Button variant="outlined" onClick={handleZero} startIcon={<RefreshIcon />}>Set to Zero</Button>
      <Button variant="outlined" onClick={handleDecrease} startIcon={<RemoveIcon />}>Decrease</Button>
      <div>
        <Typography variant='h1'>{count}</Typography>
      </div>
    </div>
  );
}
