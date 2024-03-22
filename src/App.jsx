import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItems from "./Components/ToDoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css"
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const initialTodoItems=[]

  const[todoItems,setTodoItems]=useState(initialTodoItems);
  
  function addNewItem(itemName,itemDueDate){
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

 function deleteItem(todoItemName){

  let newTodoitems=todoItems.filter(
    function(item){
      return item.name!==todoItemName;
    }
  )
  
  setTodoItems(newTodoitems);
 }


  return (

    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem
    }}>
      <div className="todo-container">
        <AppName/>

        <div className="addTodo" ><AddToDo/></div>
        {<WelcomeMessage/>}
        <ToDoItems/>
      </div>
  </TodoItemsContext.Provider>

  );
}

export default App;
