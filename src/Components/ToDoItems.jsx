import ToDoItem from "./ToDoItem";

const ToDoItems=function({todoItems}){
    return (<div className="items-container">
        {todoItems.map(function(item){
            return <ToDoItem todoName={item.name} todoDate={item.dueDate}/>
        })}
    </div>
    );
}

export default ToDoItems;