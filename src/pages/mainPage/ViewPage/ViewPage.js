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
  //(do this when there is long code or huge project) history.push("/"); };

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
            background: "red",
            padding: "10px",
            maxWidth: "100px",
          }}
        >
          {getData}
        </div>
      </div>
    </>
  );
};
export default ViewPage;
