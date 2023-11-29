Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  get '/donated-items', to: 'items#donated_items'
  get '/waste-items', to: 'items#waste_items'
  get '/allfoodrequests', to: 'foodrequests#allfoodrequests'
  
  resources :users, only: [:create, :show] 
  resources :items
  resources :food_requests
  resources :waste_pickup_requests

end
