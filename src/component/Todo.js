import React from 'react';



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
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className='complete-btn'> edit</button>
            <button onClick={deleteHandler} className='trash-btn'>delete</button>
        </div>
    );
}

export default Todo;