import React, { useEffect, useState } from "react";
import "./TodoForm.css";
import { Todo } from "../../interfaces/Todo";

let name = "satish";


interface TodoForm1Props {
  onAddTodo: (name: string) => void;
  onUpdateTodo: (id: number, name: string) => void;
  editMode: boolean;
  currentTodo?: Todo;
}

const TodoForm1: React.FC<TodoForm1Props> = ({
  onAddTodo,
  onUpdateTodo,
  editMode = false,
  currentTodo,
}) => {
  const [todoName, setTodoName] = useState("");

  useEffect(() => {
    if (currentTodo?.name) {
      setTodoName(currentTodo.name);
    }
  }, [currentTodo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editMode && currentTodo) {
      onUpdateTodo(currentTodo.id, todoName);
    } else {
      onAddTodo(todoName);
    }

    setTodoName("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo name"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button type="submit" disabled={todoName.length === 0}>
        {editMode ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm1;
