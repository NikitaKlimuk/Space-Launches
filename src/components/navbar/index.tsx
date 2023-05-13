import { NavLink } from "react-router-dom";
import ButtonDarkMode from "../buttonDarkMode";
import "./styles.scss";

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink className="logo" to="/">
            <strong>Launch Rockets</strong> project
          </NavLink>

          <ButtonDarkMode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
