import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import bg_poke1 from '../images/bg_poke1.jpg';
import pokelog from '../images/Pokelog.png';
import PokemonList from "./PokemonList";

const Pokedex = () => {
    const user = useSelector(state => state.user);
    const [pokemons, setPokemons] = useState([]);
    const [characterSearch, setCharacterSearch] = useState("");
    const [types, setTypes] = useState([]);
    const [isChange, setIsChange] = useState(false);
    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154`)
            .then(res => setPokemons(res.data.results));
        axios.get("https://pokeapi.co/api/v2/type")
            .then(res => setTypes(res.data.results));
    }, []);

    const search = e => {
        e.preventDefault();
        navigate(`/pokedex/${characterSearch}`);
    };

    const filteredPokemon = index => {
        axios.get(`https://pokeapi.co/api/v2/type/${String(+index + 1)}/`)
            .then(res => setPokemons(res.data.pokemon));
    };

    const swiche = () => {
        setIsChange(!isChange);
    };

    const itemPerPage = 12;
    const paginatedPokemons = () => {
        return pokemons.slice(page, page + itemPerPage);
    };

    const nextPage = () => {
        if (pokemons.length > page + itemPerPage) {
            setPage(page + itemPerPage);
        }
    };

    const prevPage = () => {
        if (page > 0) {
            setPage(page - itemPerPage);
        }
    };

    const totalPages = Math.ceil(pokemons.length / itemPerPage);
    let numbers = [];
    for (let i = 1; i <= totalPages; i++) {
        numbers.push(i);
    }

    return (
        <main className='container-fluid'>
            <img className="img-bg-pokedex" src={bg_poke1} alt="" />
            <header className='text-center mb-4'>
                <img className="header-img" src={pokelog} alt="" />
            </header>
            <div className='d-flex flex-wrap align-items-center mb-4 text-center custom-welcome'>
                <section className='w-100 w-md-50'>
                    <h3 className='text-uppercase font-weight-bold'>{`Welcome ${user}`}</h3>
                    <p className='mt-2'>
                        Here you can find your favorite Pokemon
                    </p>
                </section>
                <section className='w-100 w-md-50'>
                    <p>Select by:</p>
                    <span>Types /</span>
                    <input className=""
                        type='checkbox'
                        onChange={swiche}
                    />
                    <span> Pokemon</span>
                    <form
                        className='form-inline mt-3 custom-form mb-4'
                        onSubmit={search}
                    >
                        {isChange ? (
                            <div className='input-group'>
                                <input
                                    placeholder="Ingresa el nombre de tu pokemon"
                                    type='text'
                                    className='form-control'
                                    value={characterSearch}
                                    onChange={(e) =>
                                        setCharacterSearch(e.target.value)
                                    }
                                />
                                <button
                                    className='btn btn-poke1'
                                    type='submit'
                                >
                                    Search
                                </button>
                            </div>
                        ) : (
                            <select
                                className='form-control'
                                onChange={(e) =>
                                    filteredPokemon(e.target.value)
                                }
                            >
                                {types?.map((type, index) => (
                                    <option
                                        key={type.name}
                                        value={index}
                                    >
                                        {type.name}
                                    </option>
                                ))}
                            </select>
                        )}
                    </form>
                </section>
            </div>
            <PokemonList paginatedPokemons={paginatedPokemons} />
            <div className='pagination d-flex flex-wrap justify-content-center mt-4 '>
                <button
                    className='btn mx-2 btn-pag'
                    onClick={prevPage}
                >
                    Previous
                </button>
                {numbers.map((number) => (
                    <button
                        className='btn btn-pag-numbers mx-1 '
                        key={number}
                        onClick={() => setPage(number)}
                    >
                        {number}
                    </button>
                ))}
                <button
                    className='btn mx-2 btn-pag '
                    onClick={nextPage}
                >
                    Next
                </button>
            </div>
        </main>
    );
};

export default Pokedex;
