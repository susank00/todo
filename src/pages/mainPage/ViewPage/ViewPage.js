import { useHistory, useParams } from "react-router-dom";
import NavBar from "../../NavBar";

const ViewPage = () => {
  const history = useHistory();
  const getParams = useParams();
  const getID = getParams.id;
  const getStorage = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  const getData = getStorage[getID];
  // const goBack = () => {
  //   //(do this when there is long code or huge project) history.push("/"); };
  //query parse
  //   const getLocation = useLocation();
  //   const getURLParams = new URLSearchParams(getLocation.search);
  //   const getID = getURLParams.get("id");
  //   console.log(getID);
  //   const getData = getStorage[getID];
  //  console.log("getLocation");

  const deleteTodo = () => {
    getStorage.splice(getID, 1);
    localStorage.setItem("todo", JSON.stringify(getStorage));
    history.replace("/");
  };
  return (
    <>
      <NavBar />
      {/*<button onClick={goBack}>Go back</button>   this is another way*/}
      <div clasName="todo_container">
        <button
          onClick={() => {
            history.push("/");
          }}
        >
          Go back
        </button>
        <div
          style={{
            background: "green",
            padding: "10px",
            maxWidth: "100px",
          }}
        >
          {getData}
        </div>
        <button style={{ background: "red" }} onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </>
  );
};
export default ViewPage;
