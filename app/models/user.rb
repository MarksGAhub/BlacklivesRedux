class User < ActiveRecord::Base

   has_secure_password
   has_many :posts
   has_many :comments

   validates :name, presence: true
            validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
            validates :password, presence: true, confirmation: true, length: { in: 1..20 }

end
