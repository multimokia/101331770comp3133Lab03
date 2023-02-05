import { Router } from "express";
import {
    delicatessenQuery,
    findRestaurantsByCuisine,
    getAllRestaurants
} from "../services/restaurant.service.js";

const router = Router()

router.route("/")
    .get(async (req, res) => {
        if (
            req.query.sortBy
            && (
                req.query.sortBy.toLowerCase() !== "asc"
                && req.query.sortBy.toLowerCase() !== "desc"
            )
        ) {
            return res.status(400).send({ error: "Invalid sort key." });
        }

        try {
            return res.status(200).send({
                data: await getAllRestaurants(req.query.sortBy)
            });
        }

        catch (err) {
            console.error(err);
            return res.status(500).send({ error: err });
        }
    });

router.route("/cuisine/:cuisine")
    .get(async (req, res) => {
        try {
            return res.status(200).send({
                data: await findRestaurantsByCuisine(req.params["cuisine"])
            });
        }

        catch (err) {
            console.error(err);
            return res.status(500).send({ error: err });
        }
    });

router.route("/Delicatessen")
    .get(async (req, res) => {
        try {
            return res.status(200).send({
                data: await delicatessenQuery()
            });
        }

        catch (err) {
            return res.stauts(500).send({ error: err });
        }
    });

export { router };
