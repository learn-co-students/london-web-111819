class BloggersController < ApplicationController

  def index
    @bloggers = Blogger.all
  end

  def new
    @blogger = Blogger.new
  end

  def create
    @blogger = Blogger.create(blogger_params)
    if @blogger.valid?
      redirect_to blogger_path(@blogger)
    else
      flash[:errors] = @blogger.errors.full_messages
      render :new
    end
  end

  def show
    @blogger = Blogger.find(params[:id])
    @total_likes = @blogger.total_likes
    @featured_post = @blogger.featured_post
  end

  private

  def blogger_params
    params.require(:blogger).permit(:name, :age, :bio)
  end

end