import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      // newState = merge(newState, state);
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonReducer;
