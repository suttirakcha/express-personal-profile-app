import express from "express";
import { profileRoutes } from "./routes/profile.route.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/profile", profileRoutes)

app.get("/", (req, res) => {
  res.send("Welcome to Camper Bot's homepage!");
})

app.get("/hobbies", (req, res) => {
  res.send("I cycle, go boating, and play guitar.");
})

app.get("/skills", (req, res) => {
  res.send("JavaScript, Node.js, and Express.js!");
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})