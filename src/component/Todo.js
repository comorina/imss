import React from 'react';
import Check from './check.png';
import Bin from './bin.png';


const Todo = ({ text, todo, todos, setTodos, inputText }) => {
    //Delete Button event.
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    // Ckeck Button Event.
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
        // Todo Show here.
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className='complete-btn'><img src={Check} className='img' /></button>
            <button onClick={() => {
                const confirmBox = window.confirm(
<<<<<<< HEAD
                    "Do you really want to delete this Todo?"          // popup alert tab.
=======
                    "Do you really want to delete this Todo?"          // pop alert tab.
>>>>>>> 2094f86570ef626f938cbc1062b2a80f2e588643
                )
                if (confirmBox === true) {
                    deleteHandler();
                }
            }} className='trash-btn'><img src={Bin} className='img' /></button>
        </div>
    );
}

export default Todo;
//...
