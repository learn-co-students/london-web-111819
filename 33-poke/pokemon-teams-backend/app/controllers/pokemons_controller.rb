class PokemonsController < ApplicationController

  def create
    @pokemon = Pokemon.create(species: Faker::Games::Pokemon.name, nickname: Faker::Name.first_name, trainer_id: params[:pokemon][:trainer_id])

    render json: @pokemon
  end

  def destroy
    Pokemon.destroy(params[:id])

    render json: {}
  end
end
