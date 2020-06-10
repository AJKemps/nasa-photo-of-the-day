import React from 'react'

export default function Card(props) {

    const {copyright, date, explanation, url, title} = props.cardData

    console.log({copyright})

    return(
        <div>
            <img src={url} alt={title}></img>
            <div>
                <p htmlFor = 'author'>Author: {copyright}</p>
                <p htmlFor = 'date'>Date: {date}</p>
                <p htmlFor = 'caption'>{explanation}</p>
            </div>
        </div>
    )
}