import React,{useState} from 'react';
import '../../assets/css/App.css';

const Form = ({newLocation}) => {
    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if(city===""||!city) return;
        newLocation(city); 
    }
    return (
        <div className='container-city'>
            <form onSubmit={(onSubmit)}>
                <div className='input-group mb-3 mx-auto'>
                    <input type="text" className="form-control" placeholder="Ciudad" onChange={(e)=>setCity(e.target.value)}/>
                    <button className='button input-group-text' type="submit"> Buscar </button>
                </div>
            </form>
             <typography>
                  Powered by weatherapi.com
            </typography> 
            
        </div>
    );
}

export default Form;