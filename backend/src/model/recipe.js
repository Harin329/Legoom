import con from "../config/Database.js";
import { v4 as uuidv4 } from "uuid";

export class Recipe {
  addMeal(userId, nutrition, result) {
    con.query("CALL addMeal(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
      uuidv4(),
      userId,
      nutrition.calories.split(' ')[0] ?? 0,
      nutrition.carbohydrateContent.split(' ')[0] ?? 0,
      nutrition.cholesterolContent.split(' ')[0]?? 0,
      nutrition.fiberContent.split(' ')[0] ?? 0,
      nutrition.proteinContent.split(' ')[0] ?? 0,
      nutrition.saturatedFatContent.split(' ')[0] ?? 0,
      nutrition.sodiumContent.split(' ')[0] ?? 0,
      nutrition.sugarContent.split(' ')[0] ?? 0,
      nutrition.fatContent.split(' ')[0] ?? 0,
      nutrition.unsaturatedFatContent.split(' ')[0] ?? 0
    ], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res[0]);
      }
    });
  }
}