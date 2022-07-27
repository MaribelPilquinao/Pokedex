import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import PokemonList from "./PokemonList";
import pokelog from "../images/Pokelog.png";
import pokeballColors from "../images/pokeballColors.png"



const Pokedex = () => {
    // https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154 --- endpoint para todos los pokemon

    const user = useSelector(state => state.user);

    const [pokemons, setPokemons] = useState([]);
    const [characterSearch, setCharacterSearch] = useState("")
    const [types, setTypes] = useState([])
    const [isChange, setIsChange] = useState(false);
    const [page, setPage] = useState(0);
    

    const navigate = useNavigate();

    useEffect(() => {
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154`)
            .then(res => setPokemons(res.data.results))

        axios.get("https://pokeapi.co/api/v2/type")
            .then(res => setTypes(res.data.results))
    }, [])

    const search = e => {
        e.preventDefault();
        navigate(`/pokedex/${characterSearch}`)
            
    }

    const filteredPokemon = index => {

        axios.get(`https://pokeapi.co/api/v2/type/${String(+index + 1)}/`)
            .then(res => setPokemons(res.data.pokemon))
    }

    console.log(pokemons)

    const swiche = () => {
        setIsChange(!isChange)
    }

    //paginación

    const itemPerPage = 12;

    const paginatedPokemons = () => {
        return pokemons.slice(page, page + itemPerPage);
    }

    const nextPage = () => {
        if (pokemons.length > page + itemPerPage) {
            setPage(page + itemPerPage);
        }
    }

    const prevPage = () => {
        if (page > 0) {
            setPage(page - itemPerPage);
        }
    }

    const totalPages = Math.ceil(pokemons.length / itemPerPage)

    let numbers = [];
    for (let i = 1; i <= totalPages; i++) {
        numbers.push(i);
    }





    return (
        <main className="main">
            <img className="img-bg" src={pokeballColors} alt="" />
            <header className="header__logo">
                <img className="header-img" src={pokelog} alt="" />
            </header>
            <div className="container__swiche">
                <section className="section__welcome-user">
                    <h3 className="welcome-user__text">Welcome {user} </h3><hr />
                    <p style={{ marginTop: "1.3rem" }} className="welcome-user__text">here you can find your favorite pokemon</p>
                </section>
                <section className="section__swiche">
                    <p>Selecciona por:</p>
                    <span>Types /</span>
                    <input type="checkbox" onChange={swiche} className="input__swiche" />
                    <span>Pokemon</span>
                    <form action=""
                        className="form__container"
                        onSubmit={search}
                    >
                        {
                            isChange ? (
                                <>
                                    <div>
                                        <input type="text"
                                            className="types__pokemons-form"
                                            value={characterSearch}
                                            onChange={e => setCharacterSearch(e.target.value)}
                                        />
                                        <button className="btn-types__pokemons-form" onClick={search}>Search</button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <select id="type" onChange={e => filteredPokemon(e.target.value)} >
                                        {
                                            types?.map((type, index) => (
                                                <option className="types__pokemons-form"
                                                    value={index}
                                                    key={type.name}>{type.name}</option>
                                            ))
                                        }
                                    </select>
                                </>
                            )
                        }
                    </form>
                </section>
            </div>
            <div>
                <PokemonList paginatedPokemons={paginatedPokemons} />
            </div>
            <div className="btns__paginated">
                <button className="btn__pages" onClick={prevPage}>
                    Previos
                </button>
                {numbers.map(number => (
                    <button className="btn__pages-numbers" onClick={() => setPage(number)}>{number}</button>
                ))}
                <button className="btn__pages" onClick={nextPage}>
                    Nexts
                </button>
            </div>
        </main>
    );
};

export default Pokedex