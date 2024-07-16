import { useState } from 'react';
import { useTasksDispatch } from './TasksContext.jsx';

export default function AddTask() {
  const [text, setText] = useState('');
  // Get dispatch from context to use reducer
  const dispatch = useTasksDispatch();

  // Dispatch add task
  const handleAddTask = () => {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
    setText('');
  }

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </>
  );
}

let nextId = 3;
