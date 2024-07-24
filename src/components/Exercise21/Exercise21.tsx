import React ,{useState} from 'react';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';
import './styles.css';

// Todo list using react and typescript
const Exercise21: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  // Add item
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo('');
    }
  }

  return (
    <div className='Exercise21'>
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default Exercise21;
