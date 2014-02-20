migration 4, :create_categories do
  up do
    create_table :categories do
      column :id, Integer, :serial => true
      column :name, String
    end
  end

  down do
    drop_table :categories
  end
end
