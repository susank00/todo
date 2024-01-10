import { Route } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-todo/AddToDo";
import ViewPage from "../pages/mainPage/ViewPage/ViewPage";

const Routes = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact></Route>
      <Route path="/add" component={AddToDo} />
      <Route path="/view/:id" component={ViewPage} exact />
    </>
  );
};

export default Routes;
