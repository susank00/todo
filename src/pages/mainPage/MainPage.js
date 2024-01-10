import NavBar from "../NavBar";
import { FaRegEye } from "react-icons/fa";

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
            <div className="single_todo">
              {el}
              <FaRegEye size={"20px"} />
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default MainPage;
