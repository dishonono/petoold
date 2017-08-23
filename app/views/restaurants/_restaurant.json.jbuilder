json.extract! restaurant, :id, :name, :genre_id, :rating, :ten_bis, :max_delivey_time, :address, :geo, :created_at, :updated_at
json.url restaurant_url(restaurant, format: :json)
