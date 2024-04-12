import React from "react";
import CardComponent from "./CardComponent";
import './Cards.css'

export const Cards = ({results}) => {
    return(
        <div className="container">
            <ul className="cards">
                {
                    results.map(p =>(
                        <li className='card-item' key={p.name}>
                            <CardComponent url = {p.url}></CardComponent>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}