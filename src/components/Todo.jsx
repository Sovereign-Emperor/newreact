import './Todo.css';


function Todo({text, onTodoDelete}) {

    return (

        <div className="todo">
            <h3>{text}</h3>
            <button className='delBtn' onClick={() => onTodoDelete()}>Delete</button>
        </div>
    );
}

export default Todo;
