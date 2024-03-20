import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItems from "./Components/ToDoItems";

import "./App.css"
import { useState } from "react";

function App() {
  const initialTodoItems=[
    {
      name:'ABC',
      dueDate:'4/10/24'
    },
    {
      name:'XYZ',
      dueDate:'4/10/24'
    }
  ]

  const[todoItems,setTodoItems]=useState(initialTodoItems);
  
  function handleNewItem(itemName,itemDueDate){
    
    let newTodoItems=[...todoItems,{name:itemName,dueDate:itemDueDate}];
    setTodoItems(newTodoItems);
   
 }


  return <div className="todo-container">
     <AppName/>

     <div className="addTodo" ><AddToDo onNewItem={handleNewItem}/></div>
     
     <ToDoItems todoItems={todoItems}/>
  </div>
}

export default App;
