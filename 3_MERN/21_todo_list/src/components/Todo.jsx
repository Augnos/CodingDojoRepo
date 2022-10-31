const Todo = (props) => {

    const todoClasses = ["col", "text-end", "ms-auto"];

    if (props.todo.complete) {
        todoClasses.push("text-decoration-line-through");
        todoClasses.push("fst-italic");
    }

    return (
        <div className="row w-75 mx-auto mb-3 bg-light border rounded-3 justify-content-end align-items-center">
            <div className={todoClasses.join(" ")}>{props.todo.text}</div>
            <input type="checkbox" onChange={() => props.checkboxHandler(props.i)} checked={props.todo.complete} className="col-auto mx-3"></input>
            <button onClick={() => props.deleteTodo(props.i)} className="btn btn-danger col-auto">Delete</button>
        </div>
    )
}
export default Todo;