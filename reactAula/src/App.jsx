import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import MovieEe from './components/listMovie.jsx';
import PokemonApi from './components/PokemonApi.jsx';
import DragonBallApi from './components/DragonBallApi.jsx';
import MockApi from './components/MockApi.jsx';

function App() {
  const API_KEY = '67252d61'; 
  const [perfil, setPerfil] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [DBZ, setDBZ] = useState({});
  const [pokemon, setPokemon] = useState({});
  const [filme, setFilme] = useState({});
  const [text, setText] = useState(() => {
    return localStorage.getItem('easy-input') || '';
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://6a79e554674f43f4db11ebc8.mockapi.io/api/person/66");
        setPerfil(response.data);

        const responseDBZ = await axios.get(
          "https://dragonball-api.com/api/characters/43");
        setDBZ(responseDBZ.data);

        const responsePoke = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/charizard");
        setPokemon(responsePoke.data);

        const responseFilme = await axios.get(
          `https://www.omdbapi.com/?t=elite+squad&apikey=${API_KEY}`);
        setFilme(responseFilme.data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log("Error: ", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem('easy-input', text);
    console.log('Fácil: Salvando no localStorage ->', text);
  }, [text]);

  if (loading) {
    return (<div>Loading</div>);
  }
  if (error) {
    return (<div>Ocorreu um erro inesperado</div>);
  }

  return (
    <>
      <section id="center">
        {/* 2. Renderize o componente do Dragon Ball passando a prop dbz */}
        <DragonBallApi dbz={DBZ} />

<MockApi perfil={perfil} />
        <div className="card">
          <h2>UseEffect Nível Fácil: Sincronizar com LocalStorage</h2>
          <p>O que você digitar será salvo automaticamente. Se recarregar a página, não perderá a informação.</p>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Digite algo para salvar..."
          />
        </div>

        <MovieEe />
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Filme que não gostei</h2>
          <p>{filme.Title}</p>
          <img src={filme.Poster} width="170" alt={filme.Title} />
          {filme.Ratings && filme.Ratings[1] && (
            <>
              <p>{filme.Ratings[1].Source}</p>
              <p>{filme.Ratings[1].Value}</p>
            </>
          )}
        </div>

        <PokemonApi pokemon={pokemon} />
      </section>
      
      <div className="ticks"></div>
    </>
  );
}

export default App;