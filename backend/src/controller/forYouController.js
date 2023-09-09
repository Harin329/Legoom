import { ForYou } from "../models/forYou.js";

export default class ForYouController {
    addMeal() {
    return new Promise((resolve, reject) => {
      const ForYouModel = new ForYou();

      ForYouModel.addMeal((err, result) => {
        if (err) {
          reject({ error: err });
        }
        resolve(result);
      });
    });
  }
}