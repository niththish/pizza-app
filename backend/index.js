const express = require("express");
const databaseConnection = require("./config/database");
require("dotenv").config();

//routes
const userRouter = require("./routes/user");
const cartRouter = require("./routes/cart");
const pizzaRouter = require("./routes/pizza");
const ordersRouter = require("./routes/orders");

//middlewares
const authVerification = require("./middleware/verifyToken");
const handleError = require("./controllers/error_handler");

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.use("/api/user", userRouter);
app.use("/api/user/cart", cartRouter);
app.use("/api/pizzas", authVerification, pizzaRouter);
app.use("/api/orders", authVerification, ordersRouter);
app.use(handleError);

//database & server start function
const startApplication = async () => {
  await databaseConnection(process.env.DATABASEURL);
  console.log("connected to database");
  app.listen(5000, () => {
    console.log("server started...");
  });
};

startApplication();
