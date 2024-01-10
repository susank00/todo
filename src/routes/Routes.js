import { Route } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-todo/AddToDo";

const Routes = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact></Route>
      <Route path="/add" component={AddToDo} />
    </>
  );
};

export default Routes;
