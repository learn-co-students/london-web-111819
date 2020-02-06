class UsersController < ApplicationController
  def signin
    user = User.find_by(username: params[:username])
    if user and user.authenticate(params[:password])
      # we know user managed to sign in
      render json: { username:  user.username, token: issue_token({ id: user.id }) }
    else
      # we know the sign in failed
      render json: { error: 'Username/password invalid.' }, status: 403
    end
  end

  def validate
    user = get_current_user
    if user
      render json: { username:  user.username, token: issue_token({ id: user.id }) }
    else
      render json: { error: 'You are not authorized.' }, status: 401
    end
  end

  def inventory
    user = get_current_user
    if user
      render json: user.items
    else
      render json: { error: 'You are not authorized.' }, status: 401
    end
  end
end
