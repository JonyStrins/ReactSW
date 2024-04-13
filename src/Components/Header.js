import React from "react";
import '../Components/PokedexStyle.css'

export const Header = () => {
    return(
        <nav className="nav">
            <button class="btn btn-header" id="big_button"></button>
            <ul className="nav-list">
                <button class="btn btn-header" id="red_button"></button>
                <button class="btn btn-header" id="yell_button"></button>
                <button class="btn btn-header" id="green_button"></button>
            </ul>
        </nav>
    )
}