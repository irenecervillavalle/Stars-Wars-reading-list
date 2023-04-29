import React from 'react'
import './CardPeople.css'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

const CardPeople = ({name,endpoint, id, render}) => {

  console.log(endpoint, id, render)
  return (
     
        
    <div className='card-people'>
      <h4>{name}</h4>
       <NavLink style={{ width : "80%", display:"flex", justifyContent:"center" }} to={`/${render}/${endpoint}/${id}`}>
        <Button  variant="contained">Ver Mas</Button>
        </NavLink>
        <div style={{ display:'flex', justifyContent: 'flex-end', width:'100%' }}>
        <i style={{ fontSize:"20px", cursor:'pointer' }} className="fa-regular fa-heart"></i>
        </div>
        
        
    </div>
  )
}

export default CardPeople