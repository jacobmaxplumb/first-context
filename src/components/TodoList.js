import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

export const TodoList = () => {
  const { todos, removeTodo } = useContext(TodosContext);

  return (
    <ul>
      {todos.map((todo) => (
        <li onClick={() => removeTodo(todo.id)} key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
};
