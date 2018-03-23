var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');

app.use("/api/v1", restRouter);    // post
app.use("/:shortUrl", redirectRouter);    // get

app.listen(3000);