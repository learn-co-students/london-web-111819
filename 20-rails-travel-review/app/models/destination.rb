class Destination < ApplicationRecord

  has_many :posts
  has_many :bloggers, through: :posts

  def featured_post
    self.posts.max_by(&:likes)
  end

  def recent_posts
    self.posts.sort_by(&:created_at).reverse.take(5)
  end

  def average_age
    if self.bloggers.length > 0
      self.bloggers.sum("age").to_f / self.bloggers.length
    else
      0
    end
  end
end
