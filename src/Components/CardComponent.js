import React from 'react';
import { UseFetch } from './UseFetch';

function CardComponent({ url }) {

    const estado = UseFetch(url)
    const { cargando, data } = estado

    return (
        <div>
            {
                cargando
                ?
                <h1>Cargando</h1>
                :
                <div className='card' style={{width:'14rem'}} onClick={() => console.log(data.id)}>
                    <div className='card-header d-flex justify-content-center'>
                        <h5 className='card-title'>{ "#" + data.id } </h5>
                    </div>
                    <div className='card-body d-flex justify-content-center'>
                        <img src={ data.sprites.front_default } alt='Pokemon'/>
                    </div>
                    <div className='card-body d-flex justify-content-center'>
                        <p className='card-text text-capitalize'>{ data.forms[0].name }</p>
                    </div>
                    <div className='card-footer d-flex justify-content-center'>
                        <p className='card-text text-capitalize'>{ data.forms[0].types }</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default CardComponent;