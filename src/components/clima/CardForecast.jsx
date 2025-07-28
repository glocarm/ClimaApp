import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/App.css";
const CardForecast = (props) => {
  const { ciudad } = props;
  const [data, setData] = useState({});
  let url = `https://api.weatherapi.com/v1/forecast.json?key=7b6c78c29c25447aaf5102820232205&q=${ciudad}&days=3&lang=es`;
  useEffect(() => {
    const buscaData = async () => {
      const { data } = await axios.get(url);
      setData({
        localidad: data.location.name,
        region: data.location.region,
        pais: data.location.pais,
        pronostico: data.forecast.forecastday,
      });
    };
    buscaData();
  }, [ciudad, url]);
  const { localidad, region, pais, pronostico } = data;

  // Función para formatear la fecha en día-mes-año
    const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses empiezan en 0
    const año = fecha.getFullYear();
    return `${dia}-${mes}-${año}`;
  };
 // Función para obtener el día de la semana en español a partir de una fecha en formato dd-mm-aaaa
  const obtenerDiaSemana = (fechaDDMMAAAA) => {
    const [dia, mes, año] = fechaDDMMAAAA.split('-');
    // Crear un objeto Date con los componentes
    const fecha = new Date(`${año}-${mes}-${dia}`);
    const diasSemana = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado'
    ];
    return diasSemana[fecha.getDay()];
  };
 
  return (
    <div className="containerP">
      {ciudad && (
        <div className="row">
          <p className="datapais">{localidad}</p>
          <p className="datapais">{region}</p>
          <p className="datapais">{pais}</p>
          <div className="row tarjeta-clima">
            {pronostico &&
              pronostico.map((item) => {
                const fechaFormateada = formatearFecha(item.date);
                const diaSemana = obtenerDiaSemana(fechaFormateada);
                return (
                  <div className="card" key={item.date}>
                    <ul>
                      <li>
                        {/* Mostrar día de la semana junto a la fecha */}
                         <p className="temperatura">{diaSemana}</p>
                        <p>{fechaFormateada}</p>
                        <p className="temperatura">
                          Máx: {item.day.maxtemp_c} ºC
                        </p>
                        <p className="temperatura">
                          Mín: {item.day.mintemp_c} ºC
                        </p>
                        <img
                          src={item.day.condition.icon}
                          className="icono"
                          alt="Icono Tiempo"
                        />
                        <p className="descripcion">{item.day.condition.text}</p>
                      </li>
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};
export default CardForecast;