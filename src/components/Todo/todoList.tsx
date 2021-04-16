import { Todo, ToggleTodo } from "../types";
import { DeleteOutlined } from "@ant-design/icons";
import { TodoListItem } from "./todoListItem";

interface TodoListItemProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  setTodos: (arg: Todo[]) => void;
}

const TodoList: React.FC<TodoListItemProps> = ({
  todos,
  toggleTodo,
  setTodos,
}) => {
  const handleRemove = (text: string) => {
    const newToDoItems = todos.filter((todo) => todo.text !== text);
    console.log(newToDoItems);
    setTodos(newToDoItems);
  };
  return (
    <ul
      style={{
        listStyleType: "none",
        padding: "35px 0 0 0",
        margin: 0,
      }}
    >
      {todos.map((todo) => {
        return (
          <div
            key={todo.text}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TodoListItem todo={todo} toggleTodo={toggleTodo} />
            <DeleteOutlined
              onClick={() => handleRemove(todo.text)}
              style={{ color: "red", fontSize: "18px" }}
            />
          </div>
        );
      })}
    </ul>
  );
};

export default TodoList;
