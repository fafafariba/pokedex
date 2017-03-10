import React from  'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.pokemonId !== this.props.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.params.pokemonId);
    }
  }

  render() {
    let pokemon = this.props.pokemonDetail;
    console.log(pokemon, "POKEMON");
    let items;
    if (pokemon.items) {
      console.log("inside if");
      items = pokemon.items.map((item, idx) => (
      <li key={idx}>
        <img src={item.image_url} />
      </li>
    ));
    }

    return (
      <section className="pokemon-detail">
        <img src={pokemon.image_url} />
        <h3>
          {pokemon.name}
        </h3>
        <p>Type: {pokemon.poke_type}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
        <p>Moves: {pokemon.moves}</p>
        <section className="pokemon-items">
          <h4>Items</h4>
          <ul>
            {items}
          </ul>
        </section>
      </section>
    );
  }
}

export default PokemonDetail;
