ActiveRecord::Schema.define(version: 2023_11_22_053020) do

  enable_extension "plpgsql"

  create_table "food_requests", force: :cascade do |t|
    t.integer "quantity"
    t.datetime "pickup_time"
    t.string "status", default: "Scheduled"
    t.bigint "user_id", null: false
    t.bigint "item_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["item_id"], name: "index_food_requests_on_item_id"
    t.index ["user_id"], name: "index_food_requests_on_user_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.integer "quantity"
    t.datetime "purchase_date"
    t.datetime "expiration_date"
    t.string "category"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "item_type"
    t.index ["user_id"], name: "index_items_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.string "phone_number"
    t.string "address"
    t.string "category"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "waste_pickup_requests", force: :cascade do |t|
    t.string "business_name"
    t.string "email"
    t.string "phone_number"
    t.text "address"
    t.string "waste_type"
    t.integer "quantity"
    t.date "pickup_date"
    t.time "pickup_time"
    t.text "comments"
    t.string "status"
    t.bigint "item_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["item_id"], name: "index_waste_pickup_requests_on_item_id"
  end

  add_foreign_key "food_requests", "items"
  add_foreign_key "food_requests", "users"
  add_foreign_key "items", "users"
  add_foreign_key "waste_pickup_requests", "items"
end
