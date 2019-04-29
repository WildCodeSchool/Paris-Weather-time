import React from 'react'
import './ActivityCards.css'

const ActivityCards = (props) =>
(
            <div className='card'>
                <img src= {props.photo} alt= {props.alt}/>
                <h2> {props.activity} </h2>
                <p> {props.price} </p>
            </div>
        )
export default ActivityCards