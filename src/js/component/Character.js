import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../../styles/index.css";

const Character = () => {
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
            <p>Genero: {character?.properties?.gender}</p>
            <p>Color de Pelo: {character?.properties?.hair_color} </p>
          </div>
          <div>
            <p>Altura: {character?.properties?.height}</p>
            <p>Color de Ojos: {character?.properties?.eye_color} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
