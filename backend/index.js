import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import recipeRouter from "./routes/recipe.js";

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (_, res) => {
  res.send("Hello Legoom!");
});

app.use("/recipe", recipeRouter);

app.listen(port, () => {
  console.log(`Legoom backend listening on port ${port}`);
});