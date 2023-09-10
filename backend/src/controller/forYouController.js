import { Recipe } from "../model/recipe.js";
import axios from "axios";

export default class ForYouController {
  getMeals() {
    return new Promise((resolve, reject) => {
      const RecipeModel = new Recipe();

      RecipeModel.getMeal((err, result) => {
        if (err) {
          reject({ error: err });
        }
        resolve(result);
      });
    });
  }

  getRecommendation() {
    const goal = {
      "calories": 17500,
      "carbohydrates": 2100,
      "cholesterol": 1400,
      "fiber": 210,
      "protein": 800,
      "saturatedFat": 140,
      "sodium": 14000,
      "sugar": 175,
      "fat": 350,
      "unsaturatedFat": 210
    }

    return new Promise((resolve, reject) => {
      const RecipeModel = new Recipe();
      const finalTally = {
        "calories": 0,
        "carbohydrates": 0,
        "cholesterol": 0,
        "fiber": 0,
        "protein": 0,
        "saturatedFat": 0,
        "sodium": 0,
        "sugar": 0,
        "fat": 0,
        "unsaturatedFat": 0
      }

      RecipeModel.getMeal((err, result) => {
        if (err) {
          reject({ error: err });
        }
        result.forEach((res) => {
          finalTally["calories"] += res["calories"];
          finalTally["carbohydrates"] += res["carbohydrates"];
          finalTally["cholesterol"] += res["cholesterol"];
          finalTally["fiber"] += res["fiber"];
          finalTally["protein"] += res["protein"];
          finalTally["saturatedFat"] += res["saturatedFat"];
          finalTally["sodium"] += res["sodium"];
          finalTally["sugar"] += res["sugar"];
          finalTally["fat"] += res["fat"];
          finalTally["unsaturatedFat"] += res["unsaturatedFat"];
        });

        Object.keys(finalTally).forEach((key) => {
          goal[key] = goal[key] - finalTally[key];
        });

        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `https://api.edamam.com/api/recipes/v2?type=any&app_id=${process.env.RECIPE_APP_ID}&app_key=${process.env.RECIPE_APP_KEY}&dishType=Main%20course&calories=${goal['calories']}&nutrients%5BCHOCDF%5D=${goal['carbohydrates']}&nutrients%5BCHOLE%5D=${goal['cholesterol']}&nutrients%5BFASAT%5D=${goal['saturatedFat']}&nutrients%5BFAT%5D=${goal['fat']}&nutrients%5BFATRN%5D=${goal['unsaturatedFat']}&nutrients%5BFIBTG%5D=${goal['fiber']}&nutrients%5BNA%5D=${goal['sodium']}&nutrients%5BPROCNT%5D=${goal['protein']}&nutrients%5BSUGAR%5D=${goal['protein']}`,
          headers: {
            'Content-Type': 'application/json'
          }
        };

        axios.request(config)
          .then((response) => {
            const recipes = response.data;
            resolve({ message: recipes });
          })
          .catch((error) => {
            console.log(error);
            reject({ error: error });
          });
      });
    });
  }

  getSuggestion() {
    const goal = {
      "calories": 17500,
      "carbohydrates": 2100,
      "cholesterol": 1400,
      "fiber": 210,
      "protein": 800,
      "saturatedFat": 140,
      "sodium": 14000,
      "sugar": 175,
      "fat": 350,
      "unsaturatedFat": 210
    }

    return new Promise((resolve, reject) => {
      const RecipeModel = new Recipe();
      const finalTally = {
        "calories": 0,
        "carbohydrates": 0,
        "cholesterol": 0,
        "fiber": 0,
        "protein": 0,
        "saturatedFat": 0,
        "sodium": 0,
        "sugar": 0,
        "fat": 0,
        "unsaturatedFat": 0
      }

      RecipeModel.getMeal((err, result) => {
        if (err) {
          reject({ error: err });
        }
        result.forEach((res) => {
          finalTally["calories"] += res["calories"];
          finalTally["carbohydrates"] += res["carbohydrates"];
          finalTally["cholesterol"] += res["cholesterol"];
          finalTally["fiber"] += res["fiber"];
          finalTally["protein"] += res["protein"];
          finalTally["saturatedFat"] += res["saturatedFat"];
          finalTally["sodium"] += res["sodium"];
          finalTally["sugar"] += res["sugar"];
          finalTally["fat"] += res["fat"];
          finalTally["unsaturatedFat"] += res["unsaturatedFat"];
        });

        Object.keys(finalTally).forEach((key) => {
          goal[key] = goal[key] - finalTally[key];
        });

        const suggestions = [];

        if (goal["calories"] > 0) {
          suggestions.push("You should eat more calories");
          suggestions.push("When cooking carrots...Blanch vegetables to maintain vitamin content");
          suggestions.push("When choosing fish...Consider oily fish like salmon to maximise Vitamin D");
        } else {
          suggestions.push("You should eat less calories");
        }

        if (goal["carbohydrates"] > 0) {
          suggestions.push("You should eat more carbohydrates");
        } else {
          suggestions.push("You should eat less carbohydrates");
        }

        if (goal["cholesterol"] > 0) {
          suggestions.push("You should eat more cholesterol");
        } else {
          suggestions.push("You should eat less cholesterol");
        }

        if (goal["fiber"] > 0) {
          suggestions.push("You should eat more fiber");
        } else {
          suggestions.push("You should eat less fiber");
        }

        if (goal["protein"] > 0) {
          suggestions.push("You should eat more protein");
          suggestions.push("When cooking rice...Add 50g of beans for extra protein.");
        } else {
          suggestions.push("You should eat less protein");
        }

        if (goal["saturatedFat"] > 0) {
          suggestions.push("You should eat more saturated fat");
        } else {
          suggestions.push("You should eat less saturated fat");
        }

        if (goal["sodium"] > 0) {
          suggestions.push("You should eat more sodium");
        } else {
          suggestions.push("You should eat less sodium");
          suggestions.push("When seasoning food...Try lemon as a seasoning to lower salt consumption");
        }

        if (goal["sugar"] > 0) {
          suggestions.push("You should eat more sugar");
        } else {
          suggestions.push("You should eat less sugar");
        }

        if (goal["fat"] > 0) {
          suggestions.push("You should eat more fat");
        } else {
          suggestions.push("You should eat less fat");
        }

        if (goal["unsaturatedFat"] > 0) {
          suggestions.push("You should eat more unsaturated fat");
        } else {
          suggestions.push("You should eat less unsaturated fat");
        }

        resolve({ message: suggestions });
      });
    });
  }
}