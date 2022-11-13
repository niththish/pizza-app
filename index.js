const express = require("express");
const databaseConnection = require("./config/database");
require("dotenv").config();

const userRouter = require("./routes/user");
const cartRouter = require("./routes/cart");

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/user/cart", cartRouter);

const startApplication = async () => {
  await databaseConnection(process.env.DATABASEURL);
  console.log("connected to database");
  app.listen(5000, () => {
    console.log("server started...");
  });
};

startApplication();
