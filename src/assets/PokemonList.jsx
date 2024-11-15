import React from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = ({ paginatedPokemons }) => {
    return (
        <div className="container-fluid ">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 my-4 mx-auto">
                {
                    paginatedPokemons().map(pokemon => (
                        <div className="col-1 mx-auto my-4 ms-4 " key={pokemon.url ? pokemon.url : pokemon.pokemon.url}>
                            <PokemonItem
                                pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PokemonList;
