class RenameTypeColumnInUsers < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :type, :category
  end
end
