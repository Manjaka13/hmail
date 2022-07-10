const router = require("express").Router();
const Email = require("../controllers/email");

/*
    Email routes
*/

router.post("/send", Email.send);
router.get("/", Email.documentation);

module.exports = { path: "/", router };
