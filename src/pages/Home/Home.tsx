import React, { useState } from "react";
import "./Home.css";
import TodoForm from "../../components/TodoForm/TodoForm1";
import TodoList from "../../components/TodoList/TodoList1";

import { useAppDispatch, RootState } from "../../store/store";
import {
  addTodo,
  deleteAllTodos,
  removeTodo,
} from "../../store/Todos/todosSlice";

interface Todo {
  id: number;
  name: string;
}

const getUniqueId = (): number => {
  const date = new Date();
  const timestamp = date.getTime();

  return timestamp;
};

const Home: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<Todo | undefined>(undefined);

  const handleAddTodo = (name: any) => {
    try {
      const newTodo: Todo = {
        id: getUniqueId(),
        name,
      };

      
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  const handleUpdateTodo = (id: number, name: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, name } : todo
    );
    setTodos(updatedTodos);
    setEditMode(false);
    setCurrentTodo(undefined);
  };

  const handleEditTodo = (todo: Todo) => {
    setEditMode(true);
    setCurrentTodo(todo);
  };

  const handleDeleteTodo = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="home">
      <h1>Todo List</h1>
      <TodoForm
        onAddTodo={handleAddTodo}
        onUpdateTodo={handleUpdateTodo}
        editMode={editMode}
        currentTodo={currentTodo}
      />
      <TodoList
        todos={todos}
        onEditTodo={handleEditTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default Home;
