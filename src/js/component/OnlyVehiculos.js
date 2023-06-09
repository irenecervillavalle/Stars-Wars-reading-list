import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../../styles/index.css";

const OnlyVehiculos = () => {
  const params = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${params.endpoint}/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data.result))
      .catch((err) => console.error(err));
  }, []);

  console.log(character);

  return (
    <div className="cont-main-people">
      <div>
        <div className="cont-title">
        <h1>{character?.properties?.name}</h1>
        <p>{character?.description}</p>
        </div>
        
        <div className="cont-properties">
          <div>
            <p>Capacidad de carga: {character?.properties?.cargo_capacity}</p>
            <p>Modelo: {character?.properties?.model} </p>
          </div>
          <div>
            <p>Clase de vehiculo: {character?.properties?.vehicle_class}</p>
            <p>Pasajeros: {character?.properties?.passengers} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlyVehiculos;
