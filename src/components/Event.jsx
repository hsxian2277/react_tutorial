// Event component for Event List
export default function Event({ event, handlePost, handleCancel, handleDelete, handleEdit, handleSave }) {

  // Update event value when text fields change
  const handleChange = (e) => {
    event[e.target.name] = e.target.value;
  }

  // Cancel an edit or add
  const cancelEvent = () => {
    handleCancel(event);
  }

  // Delete an existing event
  const deleteEvent = () => {
    handleDelete(event);
  }

  // Validate input before post or put
  const validateInput = () => {
    if (event.eventName === '' || event.startDate === '' || event.endDate === '') {
      alert('Event details missing');
      return;
    }

    // Call post if this is a new event, call put if edit
    if (event.status === 'input') {
      handlePost(event);
    } else {
      handleSave(event);
    }
  }

  // Keep track of old value when edit
  const editEvent = () => {
    const oldEvent = { ...event };
    handleEdit(event, oldEvent);
  }

  // Render for view or edit depending on state
  if (event.status === 'complete') {
    return <tr>
              <td>{event.eventName}</td>
              <td>{event.startDate}</td>
              <td>{event.endDate}</td>
              <td>
                <button onClick={editEvent}>Edit</button>
                <button onClick={deleteEvent}>Delete</button>
              </td>
            </tr>;
  } else {
    return <tr>
              <td><input name='eventName' type='text' defaultValue={event.eventName} onChange={handleChange}></input></td>
              <td><input name='startDate' type='date' defaultValue={event.startDate} onChange={handleChange}></input></td>
              <td><input name='endDate' type='date' defaultValue={event.endDate} onChange={handleChange}></input></td>
              <td>
                <button onClick={validateInput}>Save</button>
                <button onClick={cancelEvent}>Cancel</button>
              </td>
            </tr>;
  }
}