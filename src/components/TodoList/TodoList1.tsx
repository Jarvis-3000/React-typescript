import React, { FC } from "react";
import { Todo } from "../../interfaces/Todo";
import "./TodoList.css";

import TodoItem from "../TodoItem/TodoItem1";

interface TodoList1Props {
  todos: Todo[];
  onEditTodo: (todo: Todo) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoList1: FC<TodoList1Props> = ({ todos, onEditTodo, onDeleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList1;
