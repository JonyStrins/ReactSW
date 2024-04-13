import React from "react";
import { Outlet } from "react-router-dom";
import './PokedexStyle.css';

export const Navigation = () => {
    return (
        <div>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="home">Pokemon</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="berries">Berries</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="items">Items</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="games">Games</a>
                </li>
            </ul>
            <Outlet></Outlet>
        </div>
    )
}