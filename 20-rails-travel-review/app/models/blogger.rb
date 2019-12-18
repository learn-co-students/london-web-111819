class Blogger < ApplicationRecord

  has_many :posts
  has_many :destinations, through: :posts

  validates :name, uniqueness: true, presence: true
  validates :age, numericality: { greater_than: 0 }
  validates :bio, length: { minimum: 30 }

  def total_likes
    self.posts.sum("likes")
  end

  def featured_post
    # self.posts.maximum("likes")
    self.posts.max_by(&:likes)
  end

end
