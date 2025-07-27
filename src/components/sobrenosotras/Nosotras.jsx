import '../../assets/css/App.css';
import NavBar from '../menu/NavBar';
import DataGrup from './DataGrup';
/*import './stylegrup.css';*/
import '../../assets/css/App.css';
import info from '../../assets/bd/info.json';

function Nosotras() {
  return (
    <div>
    <NavBar/>
    <div className="containerN">
      
       
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
   </div>
  );
}

export default Nosotras;