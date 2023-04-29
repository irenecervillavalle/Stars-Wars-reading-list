import React, { useEffect, useState } from "react";
import CardPeople from "./Cards/CardPeople";
import '../../styles/index.css'

const Planets = () => {

    const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then((res) => res.json())
      .then((data) => setPeople(data.results))
      .catch((err) => console.error(err));
  }, []);

  return <div>
    
    <div className="main-card">
    { people.map( item => {
        return <CardPeople name={item.name} />
    } ) }
    </div>
    
    
  </div>;
};

export default Planets;
