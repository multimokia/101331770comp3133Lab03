import { RestaurantsModel as Restaurants } from "../schema.js";

export async function findRestaurantsByCuisine(cuisine) {
    return await Restaurants.find({ cuisine });
}

export async function getAllRestaurants(sortKey) {
    let sortVal = undefined;

    if (sortKey) {
        sortVal = { restaurant_id: sortKey };
    }

    return await Restaurants.find({}, null, { sort: sortVal }).all();
}

export async function delicatessenQuery() {
    return await Restaurants
        .find({ cuisine: "Delicatessen" })
        .where("city").ne("Brooklyn")
        .sort({ name: "asc" });
}
