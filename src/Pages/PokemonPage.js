import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Loader } from "../Components/Loader";
import { UseFetch } from "../Components/UseFetch";
import { Header } from "../Components/Header";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "../Components/PokedexStyle.css";
import "../Components/Pokemon.css";

export const Pokemon = () => {

    const location = useLocation();

    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/${location.pathname}`)
    const estado = UseFetch(url)
    const { cargando, data } = estado

    var gen = 0
    if (location.pathname.substring(9) <= 151) {
        gen = 1
    }
    if (location.pathname.substring(9) > 151) {
        gen = 2
    }
    if (location.pathname.substring(9) > 251) {
        gen = 3
    }
    if (location.pathname.substring(9) > 386) {
        gen = 4
    }
    if (location.pathname.substring(9) > 493) {
        gen = 5
    }
    if (location.pathname.substring(9) > 649) {
        gen = 6
    }
    if (location.pathname.substring(9) > 721) {
        gen = 7
    }
    if (location.pathname.substring(9) > 809) {
        gen = 8
    }
    if (location.pathname.substring(9) > 905) {
        gen = 9
    }
    if (location.pathname.substring(9) > 10000) {
        gen = 0
    }

    return (
        <div>
            {
                cargando
                    ?
                    <Loader />
                    :
                    <div className="canvas">
                        <div className="container d-flex justify-content-around align-items-center">
                            <Header></Header>
                            <img
                                src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'
                                alt='Logo Pokedex'
                                width='350'
                            />
                            <div class="input-group flex-nowrap" style={{ width: 300 }}></div>
                        </div>
                        <div className="card container flex-center container m-auto d-flex justify-content-center" style={{ width: 800 }}>
                            <div className="col-md-5 col-sm-5 pokemon-card" id="pokemon_details">
                                <div className="img-container mb-4">
                                    <img id="pokemon-sprite" src={data.sprites.front_default} width={250}></img>
                                    <img id="pokemon-sprite" src={data.sprites.front_shiny} width={150}></img>
                                </div>
                                <div className="detail-container" style={{ width: 700 }}>
                                    <div className="title-container">
                                        <h3 className="name text-center" id="pokemon_name">{data.name}</h3>
                                        <div className='card-footer d-flex justify-content-center'>
                                            {
                                                data.types.map(type => (
                                                    <span key={type.type.name} className="d-flex">
                                                        <img src={require(`../Assets/Sprites/${type.type.name}.png`)} alt='Unknow' width={90} />
                                                    </span>
                                                ))
                                            }
                                        </div>
                                        <div className="stats text-center">
                                            <span className="first stat-text col-md-6"> Generación </span>
                                            <span className="stat-text col-md-6" id="generation">
                                                <img src={require(`../Assets/Generations/${gen}.png`)} alt='Unknow' width={30} />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="attributes-container">
                                        <div className="row attributes-content d-flex justify-content-center">
                                            {
                                                data.abilities.map(hab => (
                                                    <span key={hab.ability.name} className="d-flex justify-content-center">
                                                        <p className="abilities">{hab.ability.name.replace("-", ' ')}</p>
                                                    </span>
                                                ))
                                            }
                                            <small className="muted-text">Habilidades</small>
                                        </div>
                                        <div className="col attributes-content">
                                            <p className="stat-text" id="pokemon-weight">{data.weight + "00 g"}</p>
                                            <small className="muted-text">Peso</small>
                                        </div>
                                        <div className="col attributes-content">
                                            <p className="stat-text no-border" id="pokemon_height">{data.height + "0 cm"}</p>
                                            <small className="muted-text">Altura</small>
                                        </div>
                                    </div>
                                    <div className="more-data">
                                        <div className="col data-container">
                                            <p className="stat-points" id="hp_points">{data.stats[0].base_stat}</p>
                                            <p className="muted-text">Puntos de Salud</p>
                                        </div>
                                        <div className="col data-container">
                                            <p className="stat-points" id="attack_points">{data.stats[1].base_stat}</p>
                                            <p className="muted-text">Ataque</p>
                                        </div>
                                    </div>
                                    <div className="more-data">
                                        <div className="col data-container">
                                            <p className="stat-points" id="defense_points">{data.stats[2].base_stat}</p>
                                            <p className="muted-text">Defensa</p>
                                        </div>
                                        <div className="col data-container">
                                            <p className="stat-points" id="spattack_points">{data.stats[3].base_stat}</p>
                                            <p className="muted-text">Ataque Especial</p>
                                        </div>
                                    </div>
                                    <div className="more-data">
                                        <div className="col data-container">
                                            <p className="stat-points" id="spdefense_points">{data.stats[4].base_stat}</p>
                                            <p className="muted-text">Defensa Especial</p>
                                        </div>
                                        <div className="col data-container">
                                            <p className="stat-points" id="velocity_points">{data.stats[5].base_stat}</p>
                                            <p className="muted-text">Velocidad</p>
                                        </div>
                                    </div>
                                    <div className="more-data">
                                        <div className="col data-container">
                                            <AudioPlayer
                                                header={<h2 style={{ color: "darkgray" }}>Rugido</h2>}
                                                showJumpControls={false}
                                                src={data.cries.latest}
                                                onPlay={e => console.log("onPlay")}
                                                style={{ width: 300, height: 150 }}
                                            />
                                        </div>
                                        <div className="col data-container">
                                            <AudioPlayer
                                                header={<h2 style={{ color: "darkgray" }}>Rugido Legacy</h2>}
                                                showJumpControls={false}
                                                src={data.cries.legacy}
                                                onPlay={e => console.log("onPlay")}
                                                style={{ width: 300, height: 150 }}
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="more-data d-flex">
                                        <div className="col">
                                            <h3>Estadisticas:</h3>
                                            {
                                                data.stats.map(stat => (
                                                    <span key={stat.stat.name} className="d-flex justify-content-center">
                                                        <p>{stat.stat.name}: {stat.base_stat}</p>
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}