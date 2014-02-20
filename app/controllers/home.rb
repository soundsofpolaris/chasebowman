ChasebowmanCom.controllers :home do
  # get :index, :map => "/foo/bar" do
  #   session[:foo] = "bar"
  #   render 'index'
  # end

  # get :sample, :map => "/sample/url", :provides => [:any, :js] do
  #   case content_type
  #     when :js then ...
  #     else ...
  # end

  # get :foo, :with => :id do
  #   "Maps to url '/foo/#{params[:id]}'"
  # end

  # get "/example" do
  #   "Hello world!"
  # end
  
  get :index do
  end

  get :page, :with => :id do
    @page = Page.get(params[:id])
    
    partial 'home/page_content', :object => @page
  end

  get :video, :with => :id do
    @video = Video.get(params[:id])
    
    if @video.type == 'vimeo'
      partial 'home/video_vimeo', :object => @video
    else
       partial 'home/video_embed', :object => @video
    end
  end

end