import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import UserInput from "./assets/UserInput";
import CharacterDetail from "./assets/CharacterDetail";
import Pokedex from "./assets/Pokedex";
import ProtectedRoutes from './assets/ProtectedRoutes';



function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<UserInput />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/Pokedex" element={<Pokedex />} />
          <Route path="/Pokedex/:id" element={<CharacterDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App