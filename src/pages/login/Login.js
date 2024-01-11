import { Link, Route } from "react-router-dom";
import NavBar from "../NavBar";

const login = () => {
  return (
    <>
      <NavBar />

      <div className="todo_container">
        <button
          onClick={() => {
            localStorage.setItem("loggedIn", true);
          }}
        >
          login
        </button>
        <Link to="/login/Info">show ifo</Link>

        <Route path="/login/info">
          <div>this is just nested routing</div>
        </Route>
      </div>
    </>
  );
};
export default login;
