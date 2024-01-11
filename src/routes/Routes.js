import { Route, Redirect } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-todo/AddToDo";
import ViewPage from "../pages/mainPage/ViewPage/ViewPage";
import login from "../pages/login/Login";

const Routes = () => {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={MainPage} exact></Route>
      <Route path="/add" exact>
        localStorage.getItem("loggedIn") ?
        <>
          <AddToDo />
        </>
        :<Redirect to="/login"></Redirect>
      </Route>
      <Route path="/view/:id" component={ViewPage} exact />
      <Route path="/login" component={login} />
    </>
  );
};

export default Routes;
