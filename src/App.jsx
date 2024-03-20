import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItems from "./Components/ToDoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css"
import { useState } from "react";

function App() {
  const initialTodoItems=[]

  const[todoItems,setTodoItems]=useState(initialTodoItems);
  
  function handleNewItem(itemName,itemDueDate){
    
    let newTodoItems=[...todoItems,{name:itemName,dueDate:itemDueDate}];
    setTodoItems(newTodoItems);
   
 }


  return <div className="todo-container">
     <AppName/>

     <div className="addTodo" ><AddToDo onNewItem={handleNewItem}/></div>
     {todoItems.length==0 && <WelcomeMessage/>}
     <ToDoItems todoItems={todoItems}/>
  </div>
}

export default App;
