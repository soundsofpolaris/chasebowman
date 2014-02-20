class Video
  include DataMapper::Resource

  # property <name>, <type>
  property :id, Serial
  property :video_url, Text
  property :image_url, Text
  property :image_over_url, Text
  property :category, Integer, :default => 1
  property :type, String, :default => "regular"
  property :index, Integer, :default => 1
end
