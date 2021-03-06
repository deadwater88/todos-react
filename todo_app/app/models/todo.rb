class Todo < ApplicationRecord
  validates :title, :body, presence: true
  validates :done, inclusion: { in: [true, false], allow_nil: true }

  def tag_names=(tag_names)
    self.tags = tag_names.map do |tag_name|
      Tag.find_or_create_by(name: tag_name)
    end
  end

  has_many :steps, inverse_of: :todo
  has_many :taggings, inverse_of: :todo
  has_many :tags, through: :taggings, source: :tag
end
