import React, { useState, useEffect } from 'react';

const PokemonCard = ({ name, url }) => {
  const [image, setImage] = useState('');
  const [ability,setAbility] = useState('');

  useEffect(() => {

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setImage(data.sprites.front_default);
        setAbility(data.abilities[0].ability.name);
      });
  }, [url]);

  return (
    <div className="pokemon-card">
      <img src={image} alt={name} />
      <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
      <h5>Abilities : {ability}</h5>
    </div>
  );
};

export default PokemonCard;

