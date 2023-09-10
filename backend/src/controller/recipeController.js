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
          RecipeModel.addMeal('demoUser', nutrition.title, nutrition.nutrients, (err, _) => {
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
      const RecipeModel = new Recipe();

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.edamam.com/api/nutrition-data?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&nutrition-type=cooking&ingr=${encodeURIComponent(ingredients[0])}`,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const nutrition = {
        "calories": "0 kcal",
        "carbohydrateContent": "0 g",
        "cholesterolContent": "0 mg",
        "fiberContent": "0 g",
        "proteinContent": "0 g",
        "saturatedFatContent": "0 g",
        "sodiumContent": "0 mg",
        "sugarContent": "0 g",
        "fatContent": "0 g",
        "unsaturatedFatContent": "0 g"
      }

      axios.request(config)
        .then((response) => {
          const facts = response.data;
          nutrition.calories = facts.calories + " kcal";
          nutrition.carbohydrateContent = facts.totalNutrients.CHOCDF.quantity + " " + facts.totalNutrients.CHOCDF.unit;
          nutrition.cholesterolContent = facts.totalNutrients.CHOLE.quantity + " " + facts.totalNutrients.CHOLE.unit;
          nutrition.fiberContent = facts.totalNutrients.FIBTG.quantity + " " + facts.totalNutrients.FIBTG.unit;
          nutrition.proteinContent = facts.totalNutrients.PROCNT.quantity + " " + facts.totalNutrients.PROCNT.unit;
          nutrition.saturatedFatContent = facts.totalNutrients.FASAT.quantity + " " + facts.totalNutrients.FASAT.unit;
          nutrition.sodiumContent = facts.totalNutrients.NA.quantity + " " + facts.totalNutrients.NA.unit;
          nutrition.sugarContent = facts.totalNutrients.SUGAR.quantity + " " + facts.totalNutrients.SUGAR.unit;
          nutrition.fatContent = facts.totalNutrients.FAT.quantity + " " + facts.totalNutrients.FAT.unit;
          nutrition.unsaturatedFatContent = facts.totalNutrients.FATRN.quantity + " " + facts.totalNutrients.FATRN.unit;
          // Add nutrition to database
          RecipeModel.addMeal('demoUser', ingredients[0], nutrition, (err, _) => {
            if (err) {
              reject({ error: err });
            }
            resolve({ message: nutrition });
          });
        })
        .catch((error) => {
          console.log(error);
          reject({ error: error });
        });
    });
  }
}