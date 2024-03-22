import { createContext } from "react";
import { useReducer } from "react";
import { useState } from "react";

export const TodoItemsContext=createContext(
    {
        todoItems: [],
        addNewItem:()=>{},
        deleteItem:()=>{}
      }
);
function todoItemsReducer(currTodoItems,action){
  let newTodoItems=currTodoItems;

  if(action.type=="NEW_ITEM"){
    newTodoItems=[...currTodoItems,
      {name:action.payload.itemName,dueDate:action.payload.itemDueDate}];
  }else if(action.type=="DELETE_ITEM"){
    newTodoItems=currTodoItems.filter(
      function(item){
        return item.name!==action.payload.itemName;
      }
    )
  }
  return newTodoItems;
}
const TodoItemsContextProvider= ({children})=>{
  // const[todoItems,setTodoItems]=useState([]);
  const [todoItems,dispatchTodoItems]=useReducer(todoItemsReducer,[]);

  function addNewItem(itemName,itemDueDate){
    if(!itemName){
      alert('Enter Valid Name');
      return;
    }
    
    if(!itemDueDate){
      alert('Enter Valid Date')
      return ;
    }
    // let newTodoItems=[...todoItems,{name:itemName,dueDate:itemDueDate}];
    // setTodoItems(newTodoItems);
    const newItemAction={
      type:"NEW_ITEM",
      payload:{
        itemName,
        itemDueDate
      }
    };
    dispatchTodoItems(newItemAction);
   
 }

 function deleteItem(todoItemName){
  // let newTodoitems=todoItems.filter(
  //   function(item){
  //     return item.name!==todoItemName;
  //   }
  // )
  const deleteItemAction={
    type:"DELETE_ITEM",
    payload:{
      itemName:todoItemName
    }
  };
  dispatchTodoItems(deleteItemAction);
  // setTodoItems(newTodoitems);
 }
return <TodoItemsContext.Provider value={{
  todoItems,
  addNewItem,
  deleteItem
}}>
  {children}
</TodoItemsContext.Provider>
}
export default TodoItemsContextProvider;