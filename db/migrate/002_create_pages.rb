migration 2, :create_pages do
  up do
    create_table :pages do
      column :id, Integer, :serial => true
      column :title, String, :length => 255
      column :content, String, :length => 255
      column :index, Integer
    end
  end

  down do
    drop_table :pages
  end
end
