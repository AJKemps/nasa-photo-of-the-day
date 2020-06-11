import React from 'react'

export default function Card(props) {

    const {copyright, date, explanation, url, title} = props.cardData

    console.log({copyright})

    return(
        <div className='photo-container'>
            <img src={url} alt={title}></img>
            <div>
                <h2>{title}</h2>    
                <h3 htmlFor = 'author'>Author: {copyright}</h3>
                <h3 htmlFor = 'date'>Date: {date}</h3>
                <p htmlFor = 'caption'>{explanation}</p>
            </div>
        </div>
    )
}