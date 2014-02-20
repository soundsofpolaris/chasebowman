class Page
  include DataMapper::Resource

  # property <name>, <type>
  property :id, Serial
  property :title, Text
  property :content, Text
  property :index, Integer
end
