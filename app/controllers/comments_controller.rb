class CommentsController < ApplicationController
    # only allowing authenticated users to comment.
    before_filter :authenticate_user!, only: [:create]

    def comment_params
        params.require(:comment).permit(:body)
    end


    def create
        post = Post.find(params[:post_id])
        comment = post.comments.create(comment_params)
        respond_with post, comment
    end

    private
    def comment_params
        params.require(:comment).permit(:body)
    end




end
