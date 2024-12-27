Rails.application.routes.draw do
  root 'home#index'

  get 'up' => 'rails/health#show', as: :rails_health_check

  namespace :api do
    namespace :v1 do
      resources :questions, only: [:index] do
        member do
          put :update_counter
        end
      end
    end
  end
end
