import React from 'react'
import './CardPeople.css'
import { Button } from '@mui/material'

const CardPeople = ({name}) => {
  return (
    
    <div className='card-people'>
        <h4>{name}</h4>
        <Button variant="contained">Ver Mas</Button>
    </div>
  )
}

export default CardPeople