import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setColor } from "../functionColors/setColors";
import pokeball from "../images/pokeball.png"


const PokemonItem = ({ pokemonUrl }) => {
  const [character, setCharacter] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(pokemonUrl)
      .then((res) => setCharacter(res.data));
  }, []);

  console.log(character);

  return (
    <article className="card__container"
      onClick={() => navigate(`/pokedex/${character.id}`)}
      style={{
        background: setColor(character.types?.[0]?.type.name)
      }}
    >
      <div className="card__info">
        <div className="card__info-title">
          <h3>{character.name}</h3><hr />
        </div>
        <div className="card__info-parragrafh">
          <p><b>Tipo: </b>{character.types?.[0].type.name}</p>
          <p><b>Hp:</b> {character.stats?.[0].base_stat}</p>
          <p><b>Attack: </b> {character.stats?.[1].base_stat}</p>
          <p><b>Defense: </b>{character.stats?.[2].base_stat}</p>
          <p><b>Speed: </b>{character.stats?.[5].base_stat}</p>
        </div>
        <img className="img-bg__pokemon" src={pokeball} alt="" />
      </div>
      <div className="img-container">
        <img className="img-container__pokemon" src={character.sprites?.other.dream_world.front_default} alt="images pokemon" />
      </div>
    </article>
  );
};

export default PokemonItem
