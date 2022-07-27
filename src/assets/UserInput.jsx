import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { changeUser } from '../store/slices/user.slice';
import send from "../images/send.png"
import trainerwoman from "../images/trainerwoman.png"
import trainerMen from "../images/trainerMen.png"
import pokemons from "../images/pokemons.png"
import pokebola from "../images/pokebola.png"

const UserInput = () => {
    const [userName, setUserName] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = e => {
        e.preventDefault();
        dispatch(changeUser(userName));
        navigate("/pokedex")
    }
    // document.body.style.backgroundColor = "red";
    return (
        <div className="container__principal">
            <img className='img-pokeball-1' src={pokebola} alt="" />
            <div className="container__img">
                <img className='img-trainer' src={trainerwoman} alt="" />
                <img className='img-trainer' src={trainerMen} alt="" />
            </div>
            <form action=""
                className='form-principal'
                onSubmit={submit}>
                <p className='input-principal__text'>What is your name <b>TRAINER</b></p>
                <input className='input-principal'
                    type="text"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    placeholder="Name"
                />
                <button className='btn-input__principal'>
                    <img className='btn-input__principal-img' src={send} alt="" />
                </button>
            </form>
            <footer className='footer__pokemon'>
                <img className='img-pokemons' src={pokemons} alt="" />
            </footer>
        </div>
    );
};

export default UserInput;