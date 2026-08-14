import dotenv from "dotenv";
// const express = require("express");
import express from "express";

// If index.js file is restructured later this will help to find where .env file is
dotenv.config({
  path: "./.env",
});

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/instagram", (req, res) => {
  res.send("This is an instagram page");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
