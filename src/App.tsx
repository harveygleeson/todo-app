import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todos";

const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodoList((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodo = (todoId: string) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((item) => item.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todoList} onClickHandler={removeTodo} />
    </div>
  );
};

export default App;
