import { Router } from "express";
import ForYouController from "../controller/forYouController.js";

const router = Router();
const forYouController = new ForYouController();

// Retrives recent ingredients and recipes from user
// Input: UserID
// Output: Recently Consumed Recipes/Ingredients
router.get("/history", (_, res) => {
  forYouController
    .addMeal()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

// Finds Recipe Recommendations For the User
// Input: UserID
// Output: Recommended Healthy Recipes
router.get("/recommendation", (_, res) => {
  forYouController
  .addMeal()
  .then((response) => {
    res.status(200).json(response);
  })
  .catch((err) => {
    res.status(404).json(err);
  });
});

// Finds General Suggestions For the User
// Input: UserID
// Output: Suggestions For User
router.get("/suggestion", (_, res) => {
  forYouController
  .addMeal()
  .then((response) => {
    res.status(200).json(response);
  })
  .catch((err) => {
    res.status(404).json(err);
  });
});

export default router;
