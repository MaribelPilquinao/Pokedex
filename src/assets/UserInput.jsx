import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import irp from "../images/irp.png";
import pokegif from '../images/pokegif.mp4';
import { changeUser } from '../store/slices/user.slice';

const UserInput = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = e => {
    e.preventDefault();
    dispatch(changeUser(userName));
    navigate("/pokedex");
  }

  return (
    <div className='container-principal'>
      <div>
        <video className="bg-video" autoPlay loop muted src={pokegif}></video>
      </div>
      <form onSubmit={submit} className="grid grid-cols-2 gap-2">
        <p className='text-center fs-4 mb-3'>What is your name <b>TRAINER</b></p>
        <div className="input-group mb-3">
          <input
            className='form-control'
            type="text"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            placeholder="Name"
          />
          <button className='btn' type="submit">
            <img src={irp} alt="Send" style={{ width: '30px' }} />
          </button>
        </div>
      </form>
    </div>
  );
};  

export default UserInput;
