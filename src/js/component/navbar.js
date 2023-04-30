import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.css";
import People from "./People";
import Vehiculos from "./Vehiculos";
import Planets from "./Planets";
import { StorageContext } from "../../context/Context";

export const Navbar = () => {
  const { favorites, setFavorites } = useContext(StorageContext);
  const [isItems, setIsItems] = useState(false);

  const deleteFav = (e, id) => {
    e.stopPropagation();

    const newArray = [...favorites];
    newArray.splice(id, 1);

    setFavorites(newArray);
  };

  return (
    <div>
      <nav>
        <img
          className="logo"
          src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png"
        />
        <div onClick={() => setIsItems(!isItems)} className="btn-fav">
          <p>Favoritos</p>
          <p className="p1">
            {favorites.length}
          </p>
          {isItems && (
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="cont-elements"
            >
              {favorites.length > 0 ? (
                favorites.map((item, index) => {
                  return (
                    <div className="div-fav"
                      key={index}
  
                    >
                      <p className="p2">{item}</p>
                      <i
                        onClick={(e) => deleteFav(e, index)}
                        className="fa-solid fa-trash"
                      ></i>
                    </div>
                  );
                })
              ) : (
                <p className="p3">
                  No hay favoritos
                </p>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
