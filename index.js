const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const userRouter = require("./model/user.model");

// middleware
app.use(express.json());
app.use(cors());

// user routes created and router model imported
app.use("/api/user", userRouter);

app.use("*", (req, res) => {
  res.send({
    status: 502,
    success: false,
    message: "Welcome to my random user api. Here is a brief documentation for you to get started",
    documents: {
      "[GET] /api/user/random": "This endpoint will get you a random data from the json file",
      "[GET] /api/user/all":"This will send an array of object of all the user from the json file. You can optionally send 'limit' as a query parameter to limit the number of users in the response",
      "[POST] /api/user/save":"This will take a new users data as a json in the body and it will append to main file. You must send all the properties of an user like (gender, name, contact, address and photoUrl). Otherwise the server will respond with an error",
      "[PATCH] /api/user/update/:id":"This will take the id of an user as a parameter and the updated data as an json in the body and will update the user.",
      "[PATCH] /api/user/bulk-update":"This will take an [array of objects] in the body with each object having (id, gender, name, contact, address and photoUrl). The update property will be an object with the updated data. The server will update each ids with their corresponding data",
      "[DELETE] /api/user/delete":"This will take a json from the body with a property called 'id' and delete the user with that id",
    },
  });
});

app.listen(port, () => {
  console.log(`This app is listening on port ${port}`);
});
