class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  respond_to :json

  # before_action :configure_permitted_parameters, if: :devise_controller?


  def angular
    render 'layouts/application'
  end

# made devise controllers aware of the username attribute when signing up by
# adding it to the allowed parameters through a filter:
  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :username
  end

end
