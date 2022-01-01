import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  phoneNo: {
    default: null,
    type: Number,
  },
  address: {
    default: null,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
});

export const ContactsSchema = mongoose.model("ContactsSchema", contactSchema);
