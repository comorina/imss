import React from 'react';
import Todo from './Todo';


const TodoList = ({ todos, setTodos, setInputText, inputText }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        key={todo.id}
                        text={todo.text}
                        setInputText={setInputText}
                        inputText={inputText}
                    />
                ))}
            </ul>
        </div>
    );
};
export default TodoList;