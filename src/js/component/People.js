import React, { useEffect, useState } from "react";
import CardPeople from "./Cards/CardPeople";
import '../../styles/index.css'

const People = () => {

    const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then((res) => res.json())
      .then((data) => setPeople(data.results))
      .catch((err) => console.error(err));
  }, []);

  console.log(people)

  return <div>
    
    <div className="main-card">
    { people.map( item => {
        return <CardPeople name={item.name} id={item.uid} endpoint={'people'} render='character'/>
    } ) }
    </div>
    
    
  </div>;
};

export default People;
