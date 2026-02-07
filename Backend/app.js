const express = require("express");
const cors = require("cors");

const app = express();

const { errors } = require("celebrate");

app.use(
  cors({
    origin: ["http://localhost:5173", "https://sultan2403.github.io"],
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: " Looking for something? Well it's not here XD",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ success: true, message: "Server says heyyy :)" });
});

app.use(errors());

module.exports = app;
