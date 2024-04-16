import React, { useState } from "react";
import { UseFetch } from "../Components/UseFetch";
import { Cards } from "../Components/Cards";
import { Header } from "../Components/Header"
import '../Components/PokedexStyle.css'
import { useNavigate } from "react-router-dom";

const Pokemon = () => {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
    const estado = UseFetch(url)
    const { cargando, data } = estado

    const [valueSearch, setValueSearch] = useState()
    const navigate = useNavigate()

    const onSearchSubmit = (e) =>{
        e.preventDefault()

        navigate('/search', {state: valueSearch.toLowerCase()})

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
                            onChange={ e => {
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
                    <h1>Cargando...</h1>
                    :
                    <div>
                        <Cards results={data.results} />

                        <div className="container m-auto d-flex justify-content-center">
                            <button onClick={() => setUrl(data.previous)} className="m-2 btn btn-dark">Anterior</button>
                            <button onClick={() => setUrl(data.next)} className="m-2 btn btn-dark">Siguiente</button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Pokemon