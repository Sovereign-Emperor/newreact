import './Todo.css';


function Todo({text, info}) {
    return (

        <div className="todo">
            <h3>{text}</h3>
            <p>{info}</p>
            <button>Delete</button>
        </div>
    );
}

export default Todo;
