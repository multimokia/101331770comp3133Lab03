import { Schema, model } from "mongoose";

const RestaurantSchema = new Schema({
    name: { type: String, required: true },
    address: {
        type: {
            building: { type: String, required: true },
            street: { type: String, required: true },
            zipcode: { type: String, required: true }
        },
        required: true
    },
    city: { type: String, required: true },
    restaurant_id: { type: String, required: true },
    cuisine: { type: String, required: true },
});

export const RestaurantsModel = model(
    "Restaurants",
    RestaurantSchema,
    "Restaurants"
);
