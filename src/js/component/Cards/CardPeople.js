import React from 'react'
import './CardPeople.css'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

const CardPeople = ({name,endpoint, id, render}) => {

  return (
    
    <div className='card-people'>
        <h4>{name}</h4>
        <NavLink style={{ width : "80%", display:"flex", justifyContent:"center" }} to={`/character/${endpoint}/${id}`}>
        <Button  variant="contained">Ver Mas</Button>
        </NavLink>
        
    </div>
  )
}

export default CardPeople