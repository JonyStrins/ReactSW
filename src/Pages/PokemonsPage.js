import React, { useState } from "react";
import { UseFetch } from "../Components/UseFetch";
import { Cards } from "../Components/Cards";

const Pokemon = () => {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const estado = UseFetch(url)
    const { cargando, data } = estado

    return (
        <div>
            <div className="container d-flex justify-content-around align-items-center" >
                <img
                    src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'
                    alt='Logo Pokedex'
                    width='250'
                />
                <form className="d-flex justify-content-around align-items-center">
                    <div class="input-group flex-nowrap" style={{ width: 250 }}>
                        <span class="input-group-text material-icons" id="addon-wrapping">
                            search
                        </span>
                        <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping" />


                        <button className='btn btn-outline-secondary'>Buscar</button>
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