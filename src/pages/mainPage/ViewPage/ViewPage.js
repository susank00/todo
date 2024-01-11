import { useHistory } from "react-router-dom";
import NavBar from "../../NavBar";

const ViewPage = () => {
  const history = useHistory();
  const goBack = () => {
    history.push("/");
  };

  return (
    <>
      <NavBar />
      <button onClick={goBack}>Go back</button>
    </>
  );
};
export default ViewPage;
