import React from 'react';
import { Link } from 'react-router';

const PokemonIndexItem = ({ pokemon }) => (
  <li>
    <Link to={`pokemon/${pokemon.id}`} activeClassName="active">
      <p>{pokemon.name}</p>
      <img src={pokemon.image_url} />
    </Link>
  </li>
);

export default PokemonIndexItem;
