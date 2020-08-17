const express = require("express");
const morgan = require("morgan");
const { environment } = require('./config');
const cors = require('cors');
const bodyParser = require("body-parser")

const app = express();
const usersRouter = require("./routes/users")
app.use(bodyParser.json());
app.use(morgan("dev"));
// app.use(cors({ origin: "http://localhost:19002" }));

app.use(usersRouter)




// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.status = 404;
    err.errors = ["Could not find string of resource"]
    next(err);
});



// Generic error handler.
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    const isProduction = environment === "production";
    res.json({
        title: err.title || "Server Error",
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});

module.exports = app;
