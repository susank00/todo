import { Link, Route, useHistory } from "react-router-dom";
import NavBar from "../NavBar";

const Login = () => {
  const history = useHistory();
  return (
    <>
      <NavBar />

      <div className="todo_container">
        {localStorage.getItem("loggedIn") ? (
          <>
            your are already logged in
            <b
              onClick={() => {
                localStorage.removeItem("loggedIn");
                history.push("/");
              }}
              style={{ color: "red", cursor: "pointer" }}
            >
              Logout
            </b>
          </>
        ) : (
          <>
            {" "}
            <button
              onClick={() => {
                alert("you are logged in");
                history.replace("/");
                localStorage.setItem("loggedIn", true);
              }}
            >
              login
            </button>
            <br />
            <br />
            <Link to="/login/Info">show ifo</Link>
            {/* nested routing below */}
            <Route path="/login/info">
              <div>this is just nested routing</div>
            </Route>
          </>
        )}
      </div>
    </>
  );
};
export default Login;
