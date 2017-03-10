import values from 'lodash/values';

export const selectAllPokemon = state => {
  return values(state.pokemon);
  // return Object.keys(state.pokemon).map(idKey => state.pokemon[idKey]);
};

export const selectItem = (state, itemId) => {
  return state.pokemonDetail.items[itemId];
};
