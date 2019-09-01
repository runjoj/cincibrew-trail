Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  resources :breweries, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :breweries, only: [:index, :show]
      resources :users, only: [:show]
    end
  end
end
