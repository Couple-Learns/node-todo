import express from "express";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  req.hello = "sdfhaksdhfasd";
  // console.log(`Request Time: ${req.requestTime}`);
  next();
});

app.use("/api", todoRoutes);

export default app;
