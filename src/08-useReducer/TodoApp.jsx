import { useTodo } from "../hooks";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

const TodoApp = () => {
  const {
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    todos,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp: {todosCount}, <small>Pending: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Add Todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
