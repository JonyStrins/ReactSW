import React from "react";
import Pokemons from './Pages/PokemonsPage';
import HomePage from './Pages/HomePage';
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { Navigation } from "./Components/Navigation";
import { Pokemon } from "./Pages/PokemonPage";
import { SearchPage } from "./Pages/SearchPage";
import { ItemsPage } from "./Pages/ItemsPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={ <Navigation /> }>
                <Route index element={ <HomePage /> } />
                <Route path="pokemon/:id" element={ <Pokemon /> } />
                <Route path="search" element={ <SearchPage /> } />
                <Route path="Items" element={ <ItemsPage /> } />
            </Route>

            <Route path="*" element={ <Navigate to="/" />} />
        </Routes>
    )
}