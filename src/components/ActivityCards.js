import React from 'react'
import './ActivityCards.css'

const ActivityCards = (activity) =>
(
            <div className='card'>
                <img src= {activity.image} alt= {activity.alt}/>
                <h2> {activity.name} </h2>
                <p> {activity.price} </p>
            </div>
        )
export default ActivityCards