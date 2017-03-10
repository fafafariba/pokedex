import React from 'react';
import { selectAllPokemon } from '../../reducers/selectors.js';
import values from 'lodash/values';
import PokemonIndexItem from './pokemon_index_item';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllPokemon();
  }

  render() {
    let allPokemon = selectAllPokemon(this.props).map(pokemon => (
        <PokemonIndexItem pokemon={pokemon} key={pokemon.id} />
    ));
    return (
      <section className="main-pokemon">
        <nav className="pokemonNavbar">
          <ul>
            {allPokemon}
          </ul>
        </nav>
        {this.props.children}
      </section>
    );
  }
}

export default PokemonIndex;
