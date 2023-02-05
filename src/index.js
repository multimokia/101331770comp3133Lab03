import { connect } from "mongoose";
import express from "express";
import { config } from "dotenv";
import { router as restaurantRouter } from "./routes/restaurants.js";

// Load configs
config();

const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || "";

// Init express server
const app = express();

try {
    await connect(MONGODB_URI);

    app.use("/restaurants", restaurantRouter);

    // Begin listening
    app.listen(
        PORT,
        () => console.log(`Server listening on port ${PORT}`)
    );
}

catch (err) {
    console.error(err);
}
