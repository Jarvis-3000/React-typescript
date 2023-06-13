import React, { useState } from "react";
import "./Home.css";
import TodoForm from "../../components/TodoForm/TodoForm1";
import TodoList from "../../components/TodoList/TodoList1";

interface Todo {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<Todo | undefined>(undefined);

  const handleAddTodo = (name: any) => {
    try {
      const id = name.id.value;

      const newTodo: Todo = {
        id: id,
        name,
      };
      setTodos([...todos, newTodo]);
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
