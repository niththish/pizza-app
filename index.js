const express = require("express");

const userRouter = require("./routes/user");

const app = express();
app.use("/api/user", userRouter);

app.listen(5000, () => {
  console.log("server started...");
});
