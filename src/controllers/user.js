"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const User = require("../models/user");

module.exports = {
  list: async (req, res) => {
    /* 
    #swagger.tags = ["Users"]
    #swagger.summary = "List Users"
    #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
    
     */
    const data = await res.getModelList(User)

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(User),
      data,
    });
  },

  //! CRUD:
  create: async (req, res) => {
    const data = await User.find();

    res.status(200).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    const data = await User.find();

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    const data = await User.find();

    res.status(200).send({
      error: false,
      data,
    });
  },

  delete: async (req, res) => {
    const data = await User.find();

    res.status(200).send({
      error: false,
      data,
    });
  },
};
