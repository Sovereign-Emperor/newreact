import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo.jsx';
import Tittle from './components/Tittle.jsx';
import Modal from './components/Modal.jsx';

function App() {
  let isModalOpen = false;

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Tittle text="Welcome to SvnEmp React" />
      <Tittle text="My Todo List" />

      <div className="todo_input">
        <input type="text" placeholder="add/Enter a new task/todo" onChange={(event) => {
          console.log(event.target.value);
        }} />
        <button>Add Task/todo </button>
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
      {isModalOpen ?
        <Modal
          qry="Confirm delete"
          nullact="Cancel"
          yesact="Confirm"
        />
        : null}
    </div>
  );
}

export default App;
