import './Todo.css';


function Todo({text}) {

    return (

        <div className="todo">
            <h3>{text}</h3>
            <button className='delBtn' onClick={() => null}>Delete</button>
        </div>
    );
}

export default Todo;
