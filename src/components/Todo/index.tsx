import { FC, useState } from "react";
import Header from "../Header/index";
import TodoList from "./todoList";
import { Todo, ToggleTodo, AddTodo } from "../types";
import { AddTodoForm } from "./addTodoForm";

const initialTodos: Array<Todo> = [];

const TodoComponent: FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <div>
      <Header />
      <div
        style={{
          padding: "100px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AddTodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default TodoComponent;
