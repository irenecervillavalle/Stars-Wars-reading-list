import React, { useContext } from 'react'
import './CardPeople.css'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { StorageContext } from '../../../context/Context'

const CardPeople = ({name,endpoint, id, render}) => {
  
  const { setFavorites, favorites } = useContext(StorageContext)

    const addFavorite = (name) => {
      setFavorites([...favorites, name])
      
    }


  return (
     
        
    <div className='card-people'>
      <h4>{name}</h4>
       <NavLink style={{ width : "80%", display:"flex", justifyContent:"center" }} to={`/${render}/${endpoint}/${id}`}>
        <Button  variant="contained">Ver Mas</Button>
        </NavLink>
        <div style={{ display:'flex', justifyContent: 'flex-end', width:'100%' }}>
        <i  onClick={() => addFavorite(name)} style={{ fontSize:"20px", cursor:'pointer' }} className="fa-regular fa-heart"></i>
        </div>
        
        
    </div>
  )
}

export default CardPeople