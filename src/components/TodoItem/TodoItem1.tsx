import React, { FC } from "react";
import { Todo } from "../../interfaces/Todo";
import "./TodoItem.css"

interface TodoItem1Props {
  todo: Todo;
  onEditTodo: (todo: Todo) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoItem1: FC<TodoItem1Props> = ({ todo, onEditTodo, onDeleteTodo }) => {
  const handleEdit = () => {
    onEditTodo(todo);
  };

  const handleDelete = () => {
    onDeleteTodo(todo?.id);
  };

  return (
    <li className="todo-item">
      <span>{todo.name}</span>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem1;
