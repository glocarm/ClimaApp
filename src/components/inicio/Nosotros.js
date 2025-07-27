import "../../assets/css/App.css";
import { Link } from 'react-router-dom';
import NavBar from '../menu/NavBar';

function Nosotros() {
  return (
    <div className="container">
        <NavBar/>
        {info.map((item, index) => (
      <DataGrup
        key={index}
        img={item.img}
        nombre={item.nombre}
        github={item.github}
        ocupación={item.ocupación}
        meta={item.meta}
      />
    ))}
    </div>
   
  );
}

export default Nosotras;