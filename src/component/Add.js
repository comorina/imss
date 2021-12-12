import React from 'react';
import Todo from './Todo';




const Form = ({ setInputText, todos, setTodos, inputText }) => {
    // here javaScript
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTidiHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        //alert("Todo Added Successfully!");
        setInputText("");
    };
    return (
        <div>
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                <button onClick={submitTidiHandler} className="todo-button" type="submit">
                    Add
                </button>
                
            </form>
            <div classNmae="todo-container-add">
                <ul className="todo-list-add">
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
        </div>
        
    );
};

export default Form;