require("dotenv").config();
const Express = require("express");
const cors = require("cors");
const { port } = require("./helpers/const");
const emailRoute = require("./routes/email");
const jsonCheck = require("./middlewares/jsonCheck");
const notFoundCheck = require("./middlewares/notFoundCheck");

/*
    Server main entry
*/

// Setup server
const app = Express();

// Apply middlewares
app.use(cors());
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use(jsonCheck);

// Setup routes
app.use(emailRoute.path, emailRoute.router);
app.use(notFoundCheck);

// Awaiting for incoming request
app.listen(port, () => {
	console.log(`HAuth running on port ${port}`);
});
