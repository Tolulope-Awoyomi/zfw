Rails.application.routes.draw do

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  get '/donated-items', to: 'items#donated_items'
  get '/waste-items', to: 'items#waste_items'
  get '/count_donated_items', to: 'items#count_donated_items'
  get '/current_user_details', to: 'users#current_user_details'
  get '/food_business_requests', to: 'food_requests#food_business_requests'
  post 'password/forgot_password', to: 'password#forgot_password'
  post 'password/reset', to: 'password#reset'
  
  resources :users, only: [:create, :show] 
  resources :items
  resources :food_requests 
  resources :waste_pickup_requests
  
end
