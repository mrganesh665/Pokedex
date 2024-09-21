import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import Search from './components/Search';
import './App.css';
import Footer from './components/Footer';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=49')
      .then(response => {
        setPokemonList(response.data.results);
      })
      .catch(error => console.error('Error fetching the Pokémon data:', error));
  }, []);

  const filteredPokemon = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div className="app-container">
    
      <Search setSearchTerm={setSearchTerm} />
      <div className="pokemon-grid">
        {filteredPokemon.map((pokemon, index) => (
          <PokemonCard key={index} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default App;
