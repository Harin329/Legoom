import { Router } from "express";
import RecipeController from "../controller/recipeController.js";

const router = Router();
const recipeController = new RecipeController();

// Retrives nutrition from recipe and stores into database
// Input: Recipe URL
// Output: Newly added nutrition macros
router.post("/", (req, res) => {
    recipeController
    .addMeal(req)
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
router.post("/ingredient", (req, res) => {
  recipeController
  .addIngredient(req)
  .then((response) => {
    res.status(200).json(response);
  })
  .catch((err) => {
    res.status(404).json(err);
  });
});

export default router;
