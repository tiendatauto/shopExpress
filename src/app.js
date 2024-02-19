const express = require("express");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");
const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
// init db

// handle errors

app.get("/", (req, res, next) => {
  const strCompress = "Hello Fantipjs";

  return res.status(200).json({
    message: "Welcom Fantipjs",
    metadata: strCompress.repeat(10000),
  });
});

module.exports = app;
