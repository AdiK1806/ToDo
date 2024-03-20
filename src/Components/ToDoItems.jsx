import ToDoItem from "./ToDoItem";

const ToDoItems=function({todoItems,onDeleteClick}){
    return (<div className="items-container">
        {todoItems.map(function(item){
            return <ToDoItem key={item.name} todoName={item.name} todoDate={item.dueDate}
            onDeleteClick={onDeleteClick}
            />
        })}
    </div>
    );
}

export default ToDoItems;