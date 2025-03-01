"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");

/* ------------------------------------------------------- */

const BrandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      trim: true,
    },
  },
  { collection: "brands", timestamps: true }
);

module.exports = mongoose.model("Brand", BrandSchema);
