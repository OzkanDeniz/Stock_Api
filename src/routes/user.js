"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
const {list} = require("../controllers/user")
/* ------------------------------------------------------- */

router.route("/").get(list)

module.exports = router