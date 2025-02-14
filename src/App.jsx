import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo">
      <h1>MyToodle by Ankur Halder</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
