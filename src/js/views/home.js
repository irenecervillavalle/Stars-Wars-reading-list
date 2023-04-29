import React from "react";
import "../../styles/home.css";
import People from "../component/People";
import Vehiculos from "../component/Vehiculos";
import Planets from "../component/Planets";

export const Home = () => (
	<div >
		
		<main className="cont-api-info">
        <div>
          <h1>Personajes</h1>
          <People />
        </div>
        <div>
          <h1>Vehiculos</h1>
          <Vehiculos />
        </div>
        <div>
          <h1>Planetas</h1>
          <Planets />
        </div>
      </main>
	</div>
);
