import { ContactsSchema } from "../models/ContactSchema.js";
import express from "express";
import dotenv from "dotenv";

const router = express.Router();
dotenv.config();

router.get("/", (req, res) => {
  res.status(200).json("welcome user");
});

router.post("/add", async (req, res) => {
  const { email, ...rest } = req.body;

  const isContactExists = await ContactsSchema.findOne({ email });

  if (isContactExists) {
    return res.status(400).json("email already exists");
  }

  const count = await ContactsSchema.count();
  const newContact = new ContactsSchema({
    email,
    count,
    ...rest,
  });
  await newContact.save();
  return res.status(200).json("contact added sucessfully");
});

export default router;
