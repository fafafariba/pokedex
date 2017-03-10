class Api::PokemonController < ApplicationController

  def index
    @pokemon = Pokemon.all
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    if @pokemon
      render :show
    else
      render :json, @pokemon.errors.full_messages
    end
  end

  private

  def pokemon_params

  end
end
