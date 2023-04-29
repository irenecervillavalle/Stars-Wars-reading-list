import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.css";
import People from "./People";
import Vehiculos from "./Vehiculos";
import Planets from "./Planets";
import { StorageContext } from "../../context/Context";

export const Navbar = () => {

  const {favorites} = useContext(StorageContext)


  return (
    <div>
      <nav>
        <img
          className="logo"
          src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png"
        />
        <div className="btn-fav">
          <p>Favoritos</p>
          <p>{favorites.length}</p>
        </div>
      </nav>

    </div>
  );
};
