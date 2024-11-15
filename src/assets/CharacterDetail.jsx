import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { setColor } from '../functionColors/setColors';
import logoPokemon from '../images/logoPokemon.png';
import maps from '../images/maps.png';
import pokeballColors from '../images/pokeballColors.png';

const CharacterDetail = () => {
    const [character, setCharacter] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => setCharacter(res.data));
    }, [id]);

    return (
        <section
            className='container-custom'
            style={{ background: setColor(character.types?.[0]?.type.name) }}
        >
            <img className='img-poke_1' src={pokeballColors} alt="" />
            <div className='row'>
                <div className='col-12 text-center'>
                    <img
                        className='w-15 mx-auto mt-4'
                        src={logoPokemon}
                        alt='Pokemon Logo'
                    />
                    <h3 className='title-name text-uppercase'>{character.name}</h3>
                </div>
            </div>

            <div className='row justify-content-center align-items-center mb-4 position-relative'>
                <div className='detail-id'>
                    <span># {character.id}</span>
                    <p>
                        <strong>Height:</strong> {character.height}
                    </p>
                    <p>
                        <strong>Weight:</strong> {character.weight}
                    </p>
                </div>
                <div className='col-12 text-center'>
                    <img
                        className='img-detail'
                        src={character.sprites?.other.dream_world.front_default}
                        alt='Pokemon'
                    />
                </div>
                <div className='detail-a'>
                    <a
                        href={character.location_area_encounters}
                        target='blank'
                        className='btn btn-link'
                    >
                        <img
                            className='img-detail-a'
                            src={maps}
                            alt='Map'
                        />
                        <span> Encounters</span>
                    </a>
                </div>
            </div>

            <div className='row detail-description justify-content-center'>
                <div className='col-md-12'>
                    <div className='row justify-content-center detail-description1'>
                        <div className='col-md-3 '>
                            <h4>Types</h4>
                            <p>{character.types?.[0]?.type.name}</p>
                            <p>{character.types?.[1]?.type.name}</p>
                        </div>
                        <div className='col-md-3'>
                            <h4>Abilities</h4>
                            <p>{character.abilities?.[0]?.ability.name}</p>
                            <p>{character.abilities?.[1]?.ability.name}</p>
                        </div>
                    </div>
                    <div className='text-center mt-4 detail-description2'>
                        <h5 className=''>Moves</h5>
                        {character.moves?.map((move) => (
                            <button
                                className='btn btn-sm btn-details'
                                key={move?.move.name}
                            >
                                {move?.move.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CharacterDetail;
