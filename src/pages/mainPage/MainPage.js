import NavBar from "../NavBar";

const MainPage = () => {
  const getTodo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  return (
    <>
      <NavBar />

      <div className="todo_container">
        <h3>your todo:</h3>
        {getTodo.map((el) => (
          <>
            <div className="single_todo">{el} </div>
          </>
        ))}
      </div>
    </>
  );
};
export default MainPage;
