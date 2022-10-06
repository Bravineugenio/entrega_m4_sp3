import express from "express";
import "dotenv/config";
import { startDatabase } from "./database/index.js";
import categoriesRouter from "./routes/category.routes.js";

const app = express();
app.use(express.json());

app.use("/", categoriesRouter);

app.get("/", (request, response) => {
  return response.json({
    message: "Hello World Kenzie",
  });
});

export default app.listen(3000, () => {
  startDatabase();
  console.log("Server running");
});
