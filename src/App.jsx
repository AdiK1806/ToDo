import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItems from "./Components/ToDoItems";

import "./App.css"

function App() {
  const todoItems=[
    {
      name:'ABC',
      dueDate:'4/10/24'
    },
    {
      name:'XYZ',
      dueDate:'4/10/24'
    }
  ]

  return <div className="todo-container">
     <AppName/>
     <div className="addTodo"><AddToDo/></div>
     
     <ToDoItems todoItems={todoItems}/>
  </div>
}

export default App;
