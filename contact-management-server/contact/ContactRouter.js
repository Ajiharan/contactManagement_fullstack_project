import { ContactsSchema } from "../models/ContactSchema.js";
import express from "express";
import dotenv from "dotenv";

const router = express.Router();
dotenv.config();

router.get("/", (req, res) => {
  res.status(200).json("welcome user");
});

export default router;
