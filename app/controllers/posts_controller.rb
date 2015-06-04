class PostsController < ApplicationController
    # changing restriction to only allow authenticated users to post.
    before_filter :authenticate_user!, only: [:create]

    def post_params
        params.require(:post).permit(:title)
    end


    def index
        respond_with Post.all
    end


    def create
        respond_with Post.create(post_params)
    end


    def show
        respond_with Post.find(params[:id])
    end

    private
    def post_params
        params.require(:post).permit(:title)
    end

end
