import React from "react";
import { Outlet } from "react-router-dom";
import './PokedexStyle.css';

export const Navigation = () => {
    return (
        <div>
            <ul class="nav d-flex justify-content-center ">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Pokemon</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="Items">Items</a>
                </li>
            </ul>
            <Outlet></Outlet>
        </div>
    )
}