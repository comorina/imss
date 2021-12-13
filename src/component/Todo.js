import React from 'react';
import Check from'./check.png';
import Bin from './bin.png';


const Todo = ({ text, todo, todos, setTodos, inputText }) => {
    // Event
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        alert("Todo delete!")
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    };
    /*function completeHandler(){
        const updateTodos = todos.map((item)=>{
           if(item.id === todo.id){
            console.log(item);
             //  item.text = todo; 
           // return item;                
           }
          // setTodos(updateTodos);
           //newTodo(null);
            
        });
    };*/
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className='complete-btn'><img src={Check} className='img'/></button>
            <button onClick={deleteHandler} className='trash-btn'><img src={Bin}className='img'/></button>
        </div>
    );
}

export default Todo;