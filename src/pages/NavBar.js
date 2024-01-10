import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="nav_bar">
        todo
        <div className="menu_items">
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/add">
            <div>add todo</div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default NavBar;
