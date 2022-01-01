import { ContactsSchema } from "../models/ContactSchema.js";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("welcome user");
});

router.post("/add", async (req, res) => {
  try {
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
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/del/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id : ", id);
    const deleteData = await ContactsSchema.findByIdAndRemove(id);
    if (!deleteData) return res.status(400).json("record does not exists");
    return res.status(200).json(deleteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { email, ...rest } = req.body;
    const isContactExists = await ContactsSchema.findOne({ email });

    const isCurrentUserData = await ContactsSchema.findOne({ _id: id });

    if (isContactExists && isCurrentUserData.email !== email) {
      return res.status(400).json("email already exists");
    }
    const contactData = await ContactsSchema.findOneAndUpdate(
      { _id: id },
      { email, ...rest },
      { returnOriginal: false }
    );
    if (contactData) return res.status(200).json("sucessfully updated");
    return res.status(400).json("something wrong cannot updated");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getData/:count", async (req, res) => {
  try {
    const count = req.params.count;
    const fetchData = await ContactsSchema.find({
      count: { $lte: count + 10, $gt: count },
    });
    return res.status(200).json(fetchData);
  } catch (err) {
    res.status(500).json(err);
  }
});
export default router;
