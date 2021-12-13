import React, { useState } from 'react';   
import './App.css';                             // Importing CSS file.

// Importing File.
import Home from './component/Home';
import Add from './component/Add';
import List from './component/List';

// Importing Router here.
import {                                
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";          

// Here Adding Router for linking pages to each other.

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  //const [oldTodo, newTodo] = useState(null);
  return (
    <Router>
      <header>
        <h1 className='t'>Todo App</h1>
      </header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Add</Link>
            </li>
            <li>
              <Link to="/users">List</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Add inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
          </Route>
          <Route path="/users">
            <List setTodos={setTodos} todos={todos} setInputText={setInputText} inputText={inputText} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}