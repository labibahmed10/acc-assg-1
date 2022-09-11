const express = require("express");
const app = express();
const userRouter = require("./model/user.model");

// middleware
app.use(express.json());

// user routes created and router model imported
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("connected");
});

app.listen(5000);
