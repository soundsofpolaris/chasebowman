class ChasebowmanCom < Padrino::Application
  register SassInitializer
  register Padrino::Mailer
  register Padrino::Helpers
  
  enable :sessions
  
  ##
  # Application configuration options
  #
  # set :raise_errors, true     # Show exceptions (default for development)
  # set :public, "foo/bar"      # Location for static assets (default root/public)
  # set :reload, false          # Reload application files (default in development)
  # set :default_builder, "foo" # Set a custom form builder (default 'StandardFormBuilder')
  # set :locale_path, "bar"     # Set path for I18n translations (defaults to app/locale/)
  # enable  :sessions           # Disabled by default
  # disable :flash              # Disables rack-flash (enabled by default if sessions)
  # layout  :my_layout          # Layout can be in views/layouts/foo.ext or views/foo.ext (default :application)
  #

  ##
  # You can configure for a specified environment like:
  #
  #   configure :development do
  #     set :foo, :bar
  #     disable :asset_stamp # no asset timestamping for dev
  #   end
  #

  ##
  # You can manage errors like:
  #
  #   error 404 do
  #     render 'errors/404'
  #   end
  #
  
  get "/" do
    @videos = Video.all(:type.not => 'reel', :order => [ :category, :index ])# - Video.all(:type => 'reel')
    @reel = Video.first(:type => 'reel')
    @pages = Page.all(:order => [ :index ])
    
    puts @reel.inspect
    
    categories = Category.all
    @cat_hash = {}
    categories.each do |c|
      @cat_hash[c.id.to_s] = c.name.upcase
    end
    
    render 'home/index'
  end
  
  get "/menu-static" do
    session[:menu_version] = "static"
    redirect '/'
  end
  
  get "/menu-dynamic" do
    session[:menu_version] = "dynamic"
    redirect '/'
  end
  
end