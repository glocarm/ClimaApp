import React, {useState } from 'react';
import Form from '../formciudad/Form';
import '../../assets/css/App.css';
import CardForecast from './CardForecast';
const CardClima = () =>{	
	const [loading, setLoading] = useState(false);
	const [location, setLocation] = useState("");
  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);  
    loading();
  }
  return (
    <React.Fragment>
            <Form
              newLocation={getLocation}
            />
          {
             <CardForecast ciudad={location}/>
           }    
    </React.Fragment>
)
};
export default CardClima;
