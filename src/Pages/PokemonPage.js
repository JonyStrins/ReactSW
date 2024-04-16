import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Loader } from "../Components/Loader";
import { UseFetch } from "../Components/UseFetch";


export const Pokemon = () => {

    const location = useLocation();
    console.log(location);

    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/${location.pathname}`)
    const estado = UseFetch(url)
    const { cargando, data } = estado

    return (
        <div>
            {
                cargando
                    ?
                    <Loader />
                    :
                    <div>
                        <div className='card-header d-flex justify-content-center'>
                            <h5 className='card-title'>Nº {data.id} </h5>
                        </div>
                        <div className='card-body d-flex justify-content-center'>
                            <img src={data.sprites.front_default} alt='Pokemon' />
                        </div>
                        <div className='card-body d-flex justify-content-center'>
                            <p className='card-text text-capitalize'>{data.forms[0].name}</p>
                        </div>
                        <div className='card-footer d-flex justify-content-center'>
                            {
                                data.types.map(type => (
                                    <span key={type.type.name} className="d-flex">
                                        <img src={require(`../Assets/Sprites/${type.type.name}.png`)} alt='Unknow' width={90} />
                                    </span>
                                ))
                            }
                        </div>
                    </div>
            }
        </div>
    )
}