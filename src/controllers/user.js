"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const User = require("../models/user");

module.exports = {
  list: async (req, res) => {
    const data = await User.find();
    
    res.status(200).send({
      error: false,
      data,
    });
  },
};
