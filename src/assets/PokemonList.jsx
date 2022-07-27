import React from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = ({ paginatedPokemons }) => {
    return (
        <div>
            <ul className='container__card'>
                {
                    paginatedPokemons().map(pokemon =>(
                        <PokemonItem
                            pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                            key={pokemon.url ? pokemon.url : pokemon.pokemon.url} />
                    ))
                }        
     
            </ul>
        </div>
    );
};

export default PokemonList;