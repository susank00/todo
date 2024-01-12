import { useHistory } from "react-router-dom";
const AuthCheck = () => {
  const history = useHistory();
  if (localStorage.getItem("loggedIn")) {
  } else {
    history.replace("/login");
  }
};
export default AuthCheck;
