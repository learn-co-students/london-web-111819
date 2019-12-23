class DestinationsController < ApplicationController

  def index
    @destinations = Destination.all
  end

  def show
    @destination = Destination.find(params[:id])
    @featured_post = @destination.featured_post
    @recent_posts = @destination.recent_posts
    @average_age = @destination.average_age
  end
  
end
