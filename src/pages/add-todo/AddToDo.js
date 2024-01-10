import { useRef } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../NavBar";
const AddToDo = () => {
  const todoText = useRef();
  const history = useHistory();
  const addToDo = (e) => {
    e.preventDefault();

    const todoString = todoText.current.value;
    const initialTodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo")) //json changes string to object or array
      : [];
    initialTodo.push(todoString);
    localStorage.setItem("todo", JSON.stringify(initialTodo));
    history.push("/");
  };

  return (
    <>
      <NavBar />
      <div className="todo_container">
        ADD to do
        <form onSubmit={addToDo}>
          <input type="text" ref={todoText} />
          <button>save</button>
        </form>
      </div>
    </>
  );
};
export default AddToDo;
