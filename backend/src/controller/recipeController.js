import { Recipe } from "../models/recipe.js";

export default class ProjectController {
    addMeal() {
    return new Promise((resolve, reject) => {
      const RecipeModel = new Recipe();

      RecipeModel.addMeal((err, result) => {
        if (err) {
          reject({ error: err });
        }
        resolve(result);
      });
    });
  }
}