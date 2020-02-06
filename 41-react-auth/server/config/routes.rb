Rails.application.routes.draw do
  # verb '/endpoint', to: 'controller#method'
  post '/signin', to: 'users#signin'
  get '/validate', to: 'users#validate'
  get '/inventory', to: 'users#inventory'
end
