import { useHistory } from "react-router-dom";
import NavBar from "../../NavBar";

const ViewPage = () => {
  const history = useHistory();
  // const goBack = () => {
  //(do this when there is long code or huge project) history.push("/"); };

  return (
    <>
      <NavBar />
      {/*<button onClick={goBack}>Go back</button>   this is another way*/}

      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Go back
      </button>
    </>
  );
};
export default ViewPage;
