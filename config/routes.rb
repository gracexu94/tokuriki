Rails.application.routes.draw do
  root 'pages#home'
  get 'gallery' => 'pages#gallery'
  get 'explore' => 'pages#explore'
end
