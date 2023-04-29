import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../../styles/index.css";

const OnlyPlanets = () => {
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
            <p>Diametro: {character?.properties?.diameter}</p>
            <p>Gravedad: {character?.properties?.gravity} </p>
          </div>
          <div>
            <p>Poblacion: {character?.properties?.population}</p>
            <p>Periodo Rotacion: {character?.properties?.rotation_period} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlyPlanets;
