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
    const data = await res.getModelList(User);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(User),
      data,
    });
  },

  //! CRUD:
  create: async (req, res) => {
    /* 
    #swagger.tags = ["Users"]
    #swagger.summary = "Create User"
    #swagger.parameters['body'] = {
        in:'body',
        required:true,
        schema:{
        "username" : "test"
        "password" : "Test01?"
        "email" : "test@site.com"
        "firstName" : "test"
        "lastName" : "test"
        }
    }
     */

    const data = await User.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    /* 
    #swagger.tags = ["Users"]
    #swagger.summary = "Get Single User"
    
    */

    const data = await User.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    /* 
    #swagger.tags = ["Users"]
    #swagger.summary = "Update User"
    #swagger.parameters['body'] = {
        in:'body',
        required:true,
        schema:{
        "username" : "test"
        "password" : "Test01?"
        "email" : "test@site.com"
        "firstName" : "test"
        "lastName" : "test"
        }
    }
    
    */
    const data = await User.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(200).send({
      error: false,
      data,
      new: await User.findOne({ _id: req.params.id }),
    });
  },

  deletee: async (req, res) => {
    /* 
    #swagger.tags = ["Users"]
    #swagger.summary = "Delete Single User"
    */
    const data = await User.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: true,
      message: "Something went wrong, data might be deleted already.",
    });
  },
};
