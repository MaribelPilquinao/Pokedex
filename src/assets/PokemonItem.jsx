import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setColor } from "../functionColors/setColors";

const PokemonItem = ({ pokemonUrl }) => {
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(pokemonUrl)
      .then((res) => setCharacter(res.data));
  }, [pokemonUrl]);

  return (
    <article className="card card-custom" style={{ background: setColor(character.types?.[0]?.type.name), width:'20rem', height: '25rem', marginBottom: '2.5rem' }} onClick={() => navigate(`/pokedex/${character.id}`)}>
      <div className="card-body" style={{width:'20rem', height: '25rem'}}>
        <h4 className="card-title text-uppercase text-center">{character.name}</h4>
        <hr />
        <p><strong>Type:</strong> {character.types?.[0].type.name}</p>
        <p><strong>HP:</strong> {character.stats?.[0].base_stat}</p>
        <p><strong>Attack:</strong> {character.stats?.[1].base_stat}</p>
        <p><strong>Defense:</strong> {character.stats?.[2].base_stat}</p>
        <p><strong>Speed:</strong> {character.stats?.[5].base_stat}</p>
      </div>
      <div className="image-container1">
        <div className="image-container">
          <img className="card-img-bottom uniform-image" src={character.sprites?.other.dream_world.front_default} alt="Pokemon" />
        </div>
      </div>
    </article>
    
  );
};

export default PokemonItem;
