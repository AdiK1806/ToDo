import ToDoItem from "./ToDoItem";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const ToDoItems=function(){

    
    const {todoItems}=useContext(TodoItemsContext)
    const {deleteItem}=useContext(TodoItemsContext)
    
            
    return (<div className="items-container">
        {todoItems.map(function(item){

            return <ToDoItem key={item.name} todoName={item.name} todoDate={item.dueDate}
            />
            
        })}
    </div>
    );
}

export default ToDoItems;