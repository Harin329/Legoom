import { Router } from "express";
import RecipeController from "../controllers/recipeController.js";

const router = Router();
const recipeController = new RecipeController();

// Retrives nutrition from recipe and stores into database
// Input: Recipe URL
// Output: Newly added nutrition macros
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

// Retrives nutrition from ingredients and stores into database
// Input: Food Ingredients
// Output: Newly added nutrition macros
router.post("/ingredient", (_, res) => {
  recipeController
  .addMeal()
  .then((response) => {
    res.status(200).json(response);
  })
  .catch((err) => {
    res.status(404).json(err);
  });
});