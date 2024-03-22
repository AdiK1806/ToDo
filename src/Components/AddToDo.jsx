import { useContext } from "react";
import { useState } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddToDo(){
  const {addNewItem}=useContext(TodoItemsContext);
  
    const[todoName,setTodoName]=useState();
    const[dueDate,setDueDate]=useState();

    function handleNameChange(event){
      setTodoName(event.target.value);
    }
    function handleDateChange(event){
      setDueDate(event.target.value);
    }

    function handleAddButtonClick(){
      addNewItem(todoName,dueDate);
      setTodoName("");
      setDueDate("");
    }
    return <div className="row">
    <div className="col-6"><input value={todoName} type="text" placeholder="Enter ToDo" onChange={handleNameChange}/></div>

    <div className="col-4"><input value={dueDate} type="date" onChange={handleDateChange}/></div>


    <div className="col-2">
      <button type="button" className="btn btn-success addButton" onClick={handleAddButtonClick}>Add</button>
    </div>

  </div>
}

export default AddToDo;