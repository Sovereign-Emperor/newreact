import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo.jsx';
import Tittle from './components/Tittle.jsx';
import Modal from './components/Modal.jsx';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Tittle text="Welcome to SvnEmp React" />
      <Tittle text="My Todo List" />

      <Todo />
      <Todo />
      <Todo />
      <Modal />
    </div>
  );
}

export default App;
