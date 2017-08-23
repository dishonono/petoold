Rails.application.routes.draw do
  resources :restaurants
  resources :genres
  root 'restaurants#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
