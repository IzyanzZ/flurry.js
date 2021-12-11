"use strict";

/* Variables */

const path = require('path');
const express = require('express');
const expresslayout = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const IndexRoute = require('./app/route/index');
const pkg = require('./package.json');

const app = express();

/* Functions */

const log = (text) => { console.log(text) }

/* Configuration */

app.set("view engine", pkg.flurry.lang); // view language
app.set("views", path.join(__dirname + '/resources/views'));

/* Middleware */

app.use(expresslayout);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

/* Routers */

app.use("/", IndexRoute);

/* Listen */

app.listen(pkg.flurry.port, function () {
    console.clear();
    log("┏────────────────────────────────────────────────┓");
    log(`┃ → Now listening on http://localhost:${pkg.flurry.port}       ┃`);
    log("┃ → Read the documentation                       ┃");
    log("┃ → Flurry.js                                    ┃");
    log("┗────────────────────────────────────────────────┛");
});

/* Any */
app.get('*', async function asyncRouteHandler(req, res, next) {
  try {
    throw new Error('ERROR: 403 Forbidden');
  } catch (err) {
    // The `next()` function tells Express to go to the next middleware
    // in the chain. Express doesn't handle async errors, so you need to
    // report errors by calling `next()`.
    return next(err);
  }
});

app.use((err, req, res, next) => {
    res.status(403)
    res.send("<h1 style='font-family: Consolas;justify-content: center; height: 95vh;display:flex;align-items:center;'>" + err.message + "</h1>");
});