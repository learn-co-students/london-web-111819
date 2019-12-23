class PostsController < ApplicationController
  
  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
    get_collections
  end

  def show 
    @post = Post.find(params[:id])
    @blogger = @post.blogger
    @destination = @post.destination
  end

  def create
    @post = Post.create(post_params)
    if @post.valid?
      redirect_to post_path(@post)
    else
      flash[:errors] = @post.errors.full_messages
      get_collections
      render :new
    end
  end

  def edit
    @post = Post.find(params[:id])
    get_collections
  end

  def update
    @post = Post.find(params[:id])
    @post.update(post_params)
    if @post.valid?
      redirect_to post_path(@post)
    else
      flash[:errors] = @post.errors.full_messages
      get_collections
      redirect_to edit_post_path(@post)
    end
  end

  def like
    @post = Post.find(params[:id])
    @post.update(likes: @post.likes + 1)
    redirect_to post_path(@post)
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :blogger_id, :destination_id, :likes)
  end

  def get_collections
    @bloggers = Blogger.all
    @destinations = Destination.all
  end
end