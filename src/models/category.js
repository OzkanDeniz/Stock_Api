"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");

/* ------------------------------------------------------- */

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
  },
  { collection: "categories", timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
