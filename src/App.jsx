import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItem1 from "./Components/ToDoItem1";
import ToDoItem2 from "./Components/ToDoItem2";
import "./App.css"

function App() {
  return <div className="todo-container">
     <AppName/>
     <div className="addTodo"><AddToDo/></div>
     
     <div className="items-container">
      <ToDoItem1/>
      <ToDoItem2/> 
     </div>
  
  </div>
}

export default App;
