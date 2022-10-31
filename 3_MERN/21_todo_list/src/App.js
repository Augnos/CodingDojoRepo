import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Todo from "./components/Todo";

function App() {
    // Defining state variables
    const [newTodo, setNewTodo] = useState("");
    const [todoList, setTodoList] = useState([]);


    const newTodoHandler = e => {
        e.preventDefault();

        if (newTodo.length < 1) return;

        const todoItem = {
            text: newTodo,
            complete: false,
        }
        setTodoList([...todoList, todoItem]);
        setNewTodo("");
    };


    const checkboxHandler = index => {
        const updatedTodos = todoList.map((todo, i) => {
            if (index === i) {
                todo.complete = !todo.complete;

                // const updatedTodos = {... todoList, complete: !todo.complete };
                // return updatedTodos;
            }

            return todo;
        })

        setTodoList(updatedTodos);
    }


    const deleteTodo = index => {
        const filteredTodos = todoList.filter((_todo, i) => {
            return i !== index;
        });
        setTodoList(filteredTodos);
    }


    return (
        <div className="container mx-auto p-3">
            <h1 className="text-center">Todo List</h1>
            <form onSubmit={e => newTodoHandler(e)} className="row w-50 mx-auto">
                <input onChange={e => setNewTodo(e.target.value)} type="text" className="form-control mb-3 col" value={newTodo} />
                <button className="btn btn-primary col-auto mb-3">Add</button>
            </form>

            {
                todoList.map((todo, i) => {
                    return <Todo 
                        todo={todo}
                        i={i}
                        key={i}
                        checkboxHandler={checkboxHandler}
                        deleteTodo={deleteTodo}
                    />
                })
            }

        </div>

    );
}

export default App;
