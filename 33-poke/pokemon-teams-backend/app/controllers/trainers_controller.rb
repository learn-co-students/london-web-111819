class TrainersController < ApplicationController
  # Get all of the trainers
  def index
    @trainers = Trainer.all
    render json: @trainers
  end
end
