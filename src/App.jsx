import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import CharacterDetail from "./assets/CharacterDetail";
import Pokedex from "./assets/Pokedex";
import ProtectedRoutes from './assets/ProtectedRoutes';
import UserInput from "./assets/UserInput";



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