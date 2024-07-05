import { Typography } from '@mui/material';
import '../App.css';

// Exercise using props

export default function Exercise1() {
  return (
    <div className='exercise1'>
      <Job salary={90000} position={'Senior SDE'} company={'Amazon'}/>
      <Job salary={12000} position={'Junior SDE'} company={'Google'}/>
      <Job salary={10000} position={'Project Manager'} company={'Netflix'}/>
    </div>
  )
}

// Pass props to a component
const Job = (props) => {
  return (
    <div>
      <Typography variant='h5'>{props.salary}</Typography>
      <Typography variant='h5'>{props.position}</Typography>
      <Typography variant='h5'>{props.company}</Typography>
    </div>
  )
}
