migration 1, :create_videos do
  up do
    create_table :videos do
      column :id, Integer, :serial => true
      column :video_url, String, :length => 255
      column :image_url, String, :length => 255
      column :image_over_url, String, :length => 255
      column :category, Integer
      column :type, Integer
    end
  end

  down do
    drop_table :videos
  end
end
