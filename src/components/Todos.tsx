import Todo from "../models/todos";
import classes from "./Todos.module.css";
import TodoItem from "./TodoItem";

const Todos: React.FC<{
  items: Todo[];
  onClickHandler: (todoId: string) => void;
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onClick={props.onClickHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
