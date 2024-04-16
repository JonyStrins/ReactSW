import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { UseFetch } from "../Components/UseFetch";
import { Loader } from "../Components/Loader";
import { Cards } from "../Components/Cards";

export const SearchPage = () => {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    const estado = UseFetch(url)
    const { cargando, data } = estado

    const location = useLocation();

    

    return (
        <div>
            {
                cargando
                ?
                <Loader />
                :
                <Cards results={data.results.filter( pokemon => pokemon.name.includes(location.state))} />
            }
        </div>
    )
}