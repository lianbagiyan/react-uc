import React, { useState, ChangeEvent } from "react";
import { AddTodo } from "../types";
import { Input, Button } from "antd";

const InputGroup = Input.Group;

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.which === 13) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <InputGroup
      compact
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Input
        type="text"
        style={{ width: "200px" }}
        value={newTodo}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button type="primary" onClick={handleSubmit}>
        Add
      </Button>
    </InputGroup>
  );
};
