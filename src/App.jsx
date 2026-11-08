import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo.jsx';
import Tittle from './components/Tittle.jsx';
import Modal from './components/Modal.jsx';
import React, { useState, useEffect } from 'react';
import Counter from './components/counter.jsx';


function App() {

  const [showModal, setshowModal] = useState(false);

  function onTodoDelete() {
    setshowModal(true);
    console.log('onTodoDelete()');
  }
  function nullaction() {
    setshowModal(false);
    console.log('nullaction()');
  }
  function yesaction() {
    setshowModal(false);
    console.log('yesaction()');
  }

  useEffect(() => {
    console.log('useEffect()');
  }, []);
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Tittle text="Welcome to SvnEmp React" />
      <Tittle text="My Todo List" />

      <div className="todo_input">
        <input type="text" placeholder="add/Enter a new task/todo" onChange={(event) => {
          console.log(event.target.value);
        }} />
        <button className='btn' onClick={() => {setshowModal(true)}}>Add Task/todo </button>
      </div>
      <Counter />
      <Todo
        onTodoDelete={onTodoDelete}
        text="complete task 1"
      />
      <Todo
        onTodoDelete={onTodoDelete}
        text="complete task 2"
      />
      <Todo
        onTodoDelete={onTodoDelete}
        text="complete task 3"
      />
      {showModal &&
        <Modal
          qry="Confirm delete"
          nullact="Cancel"
          nullaction={nullaction}
          
          yesact="Confirm"
          yesaction={yesaction}
        />
        }
    </div>
  );
}

export default App;
