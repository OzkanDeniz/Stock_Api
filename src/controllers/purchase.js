"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const Purchase = require('../models/purchase');

module.exports = {

    list: async (req, res) => {
        /* 
            #swagger.tags = ["Purchases"]
            #swagger.summary = "List Purchases"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(Purchase)

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Purchase),
            data
        })
    },

    // CRUD:
    create: async (req, res) => {
        /* 
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Create Purchase"
            #swagger.parameters['body'] = {
                in:'body',
                required:true,
                schema:{
                    $ref"#/definitions/Purchase"
                }
            }
        */

        const data = await Purchase.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /* 
           #swagger.tags = ["Purchases"]
           #swagger.summary = "Get Single Purchase"
        */

        const data = await Purchase.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
        /* 
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Update Purchase"
            #swagger.parameters['body'] = {
                in:'body',
                required:true,
                schema:{
                    $ref"#/definitions/Purchase"
                    
                }
            }
        */

        const data = await Purchase.updateOne({ _id: req.params.id }, req.body, { runValidators: true })


        res.status(202).send({
            error: false,
            data,
            new: await Purchase.findOne({ _id: req.params.id })
        })
    },

    deletee: async (req, res) => {
        /* 
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Delete Single Purchase"
        */

        const data = await Purchase.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: true,
            message: 'Something went wrong, data might be deleted already.'
        })
    },

    //todo multiDelete controller

}