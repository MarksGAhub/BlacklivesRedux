class PostsController < ApplicationController

    def post_params
        params.require(:post).permit(:title)
    end


    def index
        respond_with Post.all
    end


    def create show
        respond_with Post.find(params[:id])
    end

    private
    def post_params
        params.require(:post).permit(:title)
    end

end
