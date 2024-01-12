import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-todo/AddToDo";
import ViewPage from "../pages/ViewPage/ViewPage";
import login from "../pages/login/Login";
import NotFound from "../pages/notfound/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={MainPage} exact></Route>
        <Route path="/add" exact>
          <AddToDo />
        </Route>
        <Route path="/view/:id" component={ViewPage} exact />
        <Route path="/Login" component={login} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
