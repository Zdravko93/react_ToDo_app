//REACT TODO APPLICATION
import React, { useState, useEffect } from 'react';
import './App.css';
// Import Components
import Form from './components/Form';
import Todo from './components/Todo';
import TodoList from './components/TodoList';


function App() {

  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //RUN ONCE when the ap starts
  useEffect(() => {
    getLocalTodos();
  }, []);
    //USE EFFECT
    useEffect(() => {
     filterHandler();
     saveLocalTodos();
    }, [todos, status]); // funkcija se pokrece jeddnom, savki put kada dodje do promena stanja u SELECT elementu
            //(all, completed. uncompleted)
  //Functions
  const filterHandler = () => {// prouciti USLOVE funkcije === itd...
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;   
    }
  };
  //Save to Local
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
     let todoLocal = JSON.parse(localStorage.getItem('todos'));
         setTodos(todoLocal);
    }
  };

  return(
     <div className="App">
        <header>
          <h1>Zdravkova To Do Lista</h1>
        </header>
        <Form inputText={inputText} todos={todos} setTodos={setTodos} 
        setInputText={setInputText} setStatus={setStatus} />
        <TodoList setTodos={setTodos} todos={todos}  filteredTodos={filteredTodos}/>
     </div>
  );
}


export default App;