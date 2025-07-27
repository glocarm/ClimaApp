import { Link } from "react-router-dom";
import "../../assets/css/App.css";
const NavBar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={"/"} className="nav-link active" id="nav-link" aria-current="page">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/Home"} class="nav-link active" id="nav-link" aria-current="page">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/Nosotras"} class="nav-link active" id="nav-link" aria-current="page">
              Sobre Nosotras
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to={"/Contactanos"}
              class="nav-link active" 
              id="nav-link"
              aria-current="page"
            >
              Contactanos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
