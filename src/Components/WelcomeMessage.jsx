import styles from "./WelcomeMessage.module.css"
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage=()=>{
    const contextObj=useContext(TodoItemsContext);
    const todoItems=contextObj.todoItems;
    
    return !todoItems.length && <p className={styles.welcome}>You have no Tasks for Today! Enjoy Your Day!</p>
}
export default WelcomeMessage;
