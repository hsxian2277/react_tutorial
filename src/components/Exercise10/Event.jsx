import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from 'react';

// Event component for Event List
export default function Event({ event, handleDelete, handlePut }) {
  const [isEditing, setEditing] = useState(false);
  const [input, setInput] = useState({
    id: event.id,
    eventName: event.eventName,
    startDate: event.startDate,
    endDate: event.endDate,
  });

  // Change value of input
  const handleChange = (e) => {
    setInput(prevInput => ({
      ...prevInput,
      [e.target.name]: e.target.value
    }));
  }

  // Toggle edit
  const toggleEdit = () => {
    setEditing(!isEditing);
  }

  // Delete an existing event
  const deleteEvent = () => {
    handleDelete(event);
  }

  // Pass new input to put
  const saveEdit = () => {
    // Don't need to update if no change
    if (JSON.stringify(input) !== JSON.stringify(event)) {
      handlePut(input, toggleEdit);
    } else {
      toggleEdit();
    }
  }

  // Render for view or edit depending on state
  if (isEditing) {
    return (
      <tr className='event'>
        <td><input name='eventName' type='text' defaultValue={event.eventName} onChange={handleChange}></input></td> 
        <td><input name='startDate' type='date' defaultValue={event.startDate} onChange={handleChange}></input></td> 
        <td><input name='endDate' type='date' defaultValue={event.endDate} onChange={handleChange}></input></td> 
        <td>
          <button className='save-btn' onClick={saveEdit}><SaveIcon /></button> 
          <button className='close-btn' onClick={toggleEdit}><CloseIcon /></button> 
        </td>
      </tr>
    )
  } else {
    return (
      <tr className='event'>
        <td>{event.eventName}</td>
        <td>{event.startDate}</td>
        <td>{event.endDate}</td>
        <td>
          <button className='edit-btn' onClick={toggleEdit}><EditIcon /></button>
          <button className='delete-btn' onClick={deleteEvent}><DeleteIcon /></button>
        </td>
      </tr>
    )
  }
}