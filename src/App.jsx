import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItems from "./Components/ToDoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css"
import  TodoItemsContextProvider  from "./store/todo-items-store";




function App() {

  return (
    <TodoItemsContextProvider>
      <div className="todo-container">
        <AppName/>

        <div className="addTodo" ><AddToDo/></div>
        {<WelcomeMessage/>}
        <ToDoItems/>
      </div>
  </TodoItemsContextProvider>

  );
}

export default App;
