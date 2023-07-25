// const express = require('express');
// import express from "express";

import mongoose from "mongoose";
import app from "./app.js";

// const app = express();

mongoose
  .connect(
    "mongodb+srv://srijan:srijan2506@cluster0.sg1qb.gcp.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("Hello world!");
});

export default app;
