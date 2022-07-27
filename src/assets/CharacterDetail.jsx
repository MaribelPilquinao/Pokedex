import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { setColor } from "../functionColors/setColors";
import logoPokemon from "../images/logoPokemon.png"
import emblemaOrange from "../images/emblemaOrange.png"
import maps from "../images/maps.png"


const CharacterDetail = () => {
    const [character, setCharacter] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => setCharacter(res.data));
    }, [id]);

    console.log(character);
    return (
        <section className='container__detail-card'
            style={{
                background: setColor(character.types?.[0]?.type.name)
            }}
        >
            <div className="card-bg__img">
                <img className='card-bg-img__logo' src={logoPokemon} alt="" />
            </div>
            <div className="detail-card__img">
                <img className='detail-card__img-pokemon' src={character.sprites?.other?.dream_world.front_default} alt="" />
            </div>
            <div className="container__info">
                <div className="card-title">
                    <h3>{character.name}</h3>
                </div>
                <div className="card-span__id">
                    <span><b>#</b> {character.id}</span>
                </div>
                <div className="card-info__pokemon-hw">
                    <p>Height: {character.height}</p>
                    <p>Weight: {character.weight}</p>
                </div>
            </div>
            <div className="container__info-types">
                <div className="card-info__pokemon-types">
                    <h3>Tipo</h3>
                    <p>{character.types?.[0]?.type.name}</p>
                    <p>{character.types?.[1]?.type.name}</p>
                </div>
                <div className="card-info__pokemon-ability">
                    <h3>Abilities</h3>
                    <p>{character.abilities?.[0].ability.name}</p>
                    <p>{character.abilities?.[1].ability.name}</p>
                </div>
            </div>
            <div className="card-info__pokemon-location">
                <a href={character.location_area_encounters}>
                    <img className='card-info-location-img' src={maps} alt="" />
                    <p>Encounters</p>
                </a>

            </div>
            <div>
                <div className="card-info__pokemon-moves">
                    <h2>Movements</h2>
                    {character.moves?.map(move => (
                        <button className='btn-moves' key={move?.move.name}>{move?.move.name}</button>
                    ))}
                </div>
            </div>
            <img className='img-emblema' src={emblemaOrange} alt="" />
        </section>
    );
};

export default CharacterDetail;

// style={{color: setColor(character.types?.[0]?.type.name)}}