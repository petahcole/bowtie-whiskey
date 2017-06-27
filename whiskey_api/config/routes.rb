Rails.application.routes.draw do
  namespace :api do
      namespace :v1 do
        resources :readmes
        resources :annotations
      end
    end
end
