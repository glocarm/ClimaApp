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
  return (
    <div className="containerP">
      {ciudad && (
        <div className="row">
          <p className="datapais">{localidad}</p>
          <p className="datapais">{region}</p>
          <p className="datapais">{pais}</p>
          <div className="row tarjeta-clima">
            {pronostico &&
              pronostico.map((item) => (
                <div className="card">
                  <ul>
                    <li key={item.date}>
                      <p>{formatearFecha(item.date)}</p>
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
                      <p className="descripcion">{item.day.condition.text}</p>{" "}
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default CardForecast;
