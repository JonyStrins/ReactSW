import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UseFetch } from "../Components/UseFetch";
import { Loader } from "../Components/Loader";
import { Cards } from "../Components/Cards";
import { Header } from "../Components/Header";

export const SearchPage = () => {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    const estado = UseFetch(url)
    const { cargando, data } = estado

    const location = useLocation();

    const [valueSearch, setValueSearch] = useState()
    const navigate = useNavigate()

    const onSearchSubmit = (e) =>{
        e.preventDefault()

        navigate('/search', {state: valueSearch.toLowerCase()})

    }

    function isEmptyObject(obj) {
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                return false;
            }
        }
        return true;
    }


    return (
        <div>
            <div className="container d-flex justify-content-around align-items-center" >
                <Header></Header>
                <img
                    src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'
                    alt='Logo Pokedex'
                    width='350'
                />
                <form className="d-flex justify-content-around align-items-center" onSubmit={onSearchSubmit}>
                    <div class="input-group flex-nowrap" style={{ width: 500 }}>
                        <span class="input-group-text material-icons" id="addon-wrapping">
                            search
                        </span>
                        <input className="search-bar" type="text" class="form-control"
                            placeholder="Ex: Mewtwo" aria-label="Username" aria-describedby="addon-wrapping"
                            value={valueSearch}
                            onChange={e => {
                                setValueSearch(e.target.value)
                            }}
                        />
                        <button className='btn btn-outline-secondary' id="search-btn">Buscar</button>
                    </div>
                </form>
            </div>
            {
                cargando
                    ?
                    <Loader />
                    :
                    isEmptyObject(data.results.filter(pokemon => pokemon.name.includes(location.state)))
                        ?
                        <div className="row d-flex justify-content-center">
                            <div className="d-flex justify-content-center">
                                <h1>No Existen Pokemones Asi</h1>
                            </div>
                            <div className="d-flex justify-content-center">
                                <img src={require('../Assets/Images/0.png')} />
                            </div>
                        </div>
                        :
                        <Cards results={data.results.filter(pokemon => pokemon.name.includes(location.state))} />

            }
        </div>
    )
}