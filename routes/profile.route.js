import { Router } from "express";

export const profileRoutes = Router();

profileRoutes.get("/", (req, res) => {
  res.json({
    name: "Camper Bot",
    hobbies: ["cycling", "boating", "guitar"],
    skills: ["JavaScript", "Node.js", "Express.js"]
  })
})