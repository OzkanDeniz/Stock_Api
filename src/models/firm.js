"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
const passwordEncrypt = require("../helpers/passwordEncrypt");
/* ------------------------------------------------------- */

const FirmSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
  },
  { collection: "firms", timestamps: true }
);

module.exports = mongoose.model("User", FirmSchema);
