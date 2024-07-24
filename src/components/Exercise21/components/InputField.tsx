import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

// Input field of todo list
export default function InputField({todo, setTodo, handleAdd}:Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input-field"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}>
      <input 
        ref={inputRef}
        type='input'
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}/>
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};
