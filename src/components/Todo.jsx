import './Todo.css';


function Todo({text}) {

    function deleteTodo() {
        console.log('Delete Todo', text, 'clicked');
    }

    return (

        <div className="todo">
            <h3>{text}</h3>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    );
}

export default Todo;
