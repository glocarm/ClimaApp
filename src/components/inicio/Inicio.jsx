import "../../assets/css/App.css";
import { Link } from "react-router-dom";


function Inicio() {
  return (
    <div className="containerinicio">
      <div className="logo">
        <img src="logoclima.png" alt="Logo ClimApp"/>
      </div>
      <div>
        <Link to="/Home">
          <button className="btn btn-dark mb-10">Ingresar</button>
        </Link>
      </div>
    </div>
  );
}
export default Inicio;
