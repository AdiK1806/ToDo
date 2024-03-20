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
    if(!itemName){
      alert('Enter Valid Name');
      return;
    }
    
    if(!itemDueDate){

      alert('Enter Valid Date')
      return ;
    }
    let newTodoItems=[...todoItems,{name:itemName,dueDate:itemDueDate}];
    setTodoItems(newTodoItems);
   
 }

 function handleDeleteItem(todoItemName){

  let newTodoitems=todoItems.filter(
    function(item){
      return item.name!==todoItemName;
    }
  )
  console.log(newTodoitems);
  setTodoItems(newTodoitems);
 }

  return <div className="todo-container">
     <AppName/>

     <div className="addTodo" ><AddToDo onNewItem={handleNewItem}/></div>
     {todoItems.length==0 && <WelcomeMessage/>}
     <ToDoItems todoItems={todoItems}
     onDeleteClick={handleDeleteItem}
     />
  </div>
}

export default App;
