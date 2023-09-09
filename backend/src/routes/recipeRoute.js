import { Router } from "express";
import RecipeController from "../controllers/recipeController.js";

const router = Router();
const recipeController = new RecipeController();

router.post("/", (_, res) => {
    recipeController
    .addMeal()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});
