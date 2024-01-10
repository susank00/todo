import { useRef } from "react";
import NavBar from "../NavBar";
const AddToDo = () => {
  const todoText = useRef();
  const addToDo = (e) => {
    e.preventDefault();
    console.log(todoText.current.value);
  };

  return (
    <>
      <NavBar />
      <div className="todo_container">
        ADD to do
        <br />
        <form onSubmit={addToDo}>
          <input type="text" ref={todoText} />
          <button>save</button>
        </form>
      </div>
    </>
  );
};
export default AddToDo;
