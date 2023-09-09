import { Recipe } from "../model/recipe.js";
import axios from "axios";


export default class ProjectController {
  addMeal(req) {
    return new Promise((resolve, reject) => {
      const recipeURL = req.body.recipeURL;
      const RecipeModel = new Recipe();

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://sj209fkua0.execute-api.us-west-2.amazonaws.com/copy?url=${recipeURL}`,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      axios.request(config)
        .then((response) => {
          const nutrition = response.data;
          // Add nutrition to database
          RecipeModel.addMeal('demoUser', nutrition, (err, _) => {
            if (err) {
              reject({ error: err });
            }
            resolve({ message: response.data });
          });
        })
        .catch((error) => {
          console.log(error);
          reject({ error: error });
        });
    });
  }

  addIngredient(req) {
    return new Promise((resolve, reject) => {
      const ingredients = req.body.ingredients;
      resolve({ message: ingredients });
      const RecipeModel = new Recipe();

      // RecipeModel.addMeal((err, result) => {
      //   if (err) {
      //     reject({ error: err });
      //   }
      //   resolve(result);
      // });
    });
  }
}