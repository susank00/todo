import { Route, Redirect } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-todo/AddToDo";
import ViewPage from "../pages/mainPage/ViewPage/ViewPage";

const Routes = () => {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={MainPage} exact></Route>
      <Route path="/add" component={AddToDo} exact />
      <Route path="/view/:id" component={ViewPage} exact />
    </>
  );
};

export default Routes;
