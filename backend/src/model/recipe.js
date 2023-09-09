import con from "../config/Database.js";

export class Recipe {
    addMeal(result) {
    con.query("CALL addMeal", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res[0]);
      }
    });
  }
}