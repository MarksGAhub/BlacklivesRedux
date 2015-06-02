class Post < ActiveRecord::Base
    has_many :comments, dependent: :destroy
    belongs_to :user

    mount_uploader :picture, PictureUploader

    validate  :picture_size

    def as_json(options = {})
      super(options.merge(include: :comments))
    end

    private

      def picture_size
        if picture.size > 5.megabytes
          errors.add(:picture, "should be less than 5MB")
        end
      end
end
