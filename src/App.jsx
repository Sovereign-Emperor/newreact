import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo.jsx';
import Tittle from './components/Tittle.jsx';
import Modal from './components/Modal.jsx';
import React, { useState } from 'react';


function App() {

  const [showModal, setshowModal] = useState(false);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Tittle text="Welcome to SvnEmp React" />
      <Tittle text="My Todo List" />

      <div className="todo_input">
        <input type="text" placeholder="add/Enter a new task/todo" onChange={(event) => {
          console.log(event.target.value);
        }} />
        <button onClick={() => {setshowModal(true)}}>Add Task/todo </button>
      </div>

      <Todo
        text="complete task 1"
      />
      <Todo
        text="complete task 2"
      />
      <Todo
        text="complete task 3"
      />
      {showModal &&
        <Modal
          qry="Confirm delete"
          nullact="Cancel"
          yesact="Confirm"
        />
        }
    </div>
  );
}

export default App;
