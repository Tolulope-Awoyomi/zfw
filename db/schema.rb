# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_12_02_064616) do

  # These are extensions that must be enabled in order to support this database
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
    t.string "status", default: "pending"
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
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
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
