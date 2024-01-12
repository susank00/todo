import { Link } from "react-router-dom";
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

        {getTodo && getTodo.length > 0 ? (
          <>
            {getTodo.map((el, index) => (
              <>
                <div className="single_todo">
                  {el}
                  <Link to={`/view/${index}`}>
                    <FaRegEye size={"20px"} />{" "}
                  </Link>
                  {/*
              <Link to={"/view/" + el}>
                <FaRegEye size={"20px"} />{" "}
              </Link>{" "}      this i salso used but old we will use back tick easy
        */}
                </div>
              </>
            ))}
          </>
        ) : (
          <>
            <center>
              nothing to show. please <Link to="/add">ADD SOME</Link>
            </center>
          </>
        )}
      </div>
    </>
  );
};
export default MainPage;
