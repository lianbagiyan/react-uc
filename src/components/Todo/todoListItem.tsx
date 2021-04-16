import { Todo, ToggleTodo } from "../types";
import { Checkbox } from "antd";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
}) => {
  return (
    <li
      style={{
        padding: "7px 0",
        width: "240px",
      }}
    >
      <label
        style={{
          textDecoration: todo.complete ? "line-through" : "none",
          fontSize: "17px",
          fontWeight: "bold",
        }}
      >
        <Checkbox
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
          style={{ paddingRight: "10px" }}
        />
        {todo.text}
      </label>
    </li>
  );
};
