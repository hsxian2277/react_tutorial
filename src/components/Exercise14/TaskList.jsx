import { useState } from 'react';
import { useTasks, useTasksDispatch } from './TasksContext.jsx';

// Task list
export default function TaskList() {
  // Use context to consume the tasks
  const tasks = useTasks();

  return (
    <ul>
      {tasks?.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

// Task
function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  // Use dispatch from context and passing it an action for reducer
  const dispatch = useTasksDispatch();
  let taskContent;

  // Dispatch change task
  const handleChangeTaskText = (e) => {
    dispatch({
      type: 'changed',
      task: {
        ...task,
        text: e.target.value
      }
    });
  }

  const handleChangeTaskChecked = (e) => {
    dispatch({
      type: 'changed',
      task: {
        ...task,
        done: e.target.checked
      }
    });
  }

  // Dispatch delete task
  const handleDeleteTask = () => {
    dispatch({
      type: 'deleted',
      id: task.id
    });
  }

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={handleChangeTaskText} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={handleChangeTaskChecked}
      />
      {taskContent}
      <button onClick={handleDeleteTask}>
        Delete
      </button>
    </label>
  );
}
