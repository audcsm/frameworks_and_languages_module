Rails.application.routes.draw do
  get '/item' => 'item#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :item, only: [:index, :create]
end
