const fs = require("fs");
const allData = JSON.parse(fs.readFileSync("data.json"));

module.exports.getRamdomUser = (req, res) => {
  const randomNum = Math.floor(Math.random() * allData.length + 1);
  const randomPerson = allData.find((user) => user.id === randomNum);
  console.log(randomPerson);
  res.send({
    success: true,
    result: randomPerson,
  });
};

module.exports.getAllUser = (req, res) => {
  const limit = Number(req.query?.limit);
  const result = allData.slice(0, limit);
  if (limit) {
    res.send({
      status: 200,
      success: true,
      result: result,
    });
  } else {
    res.send({
      status: 200,
      success: true,
      result: allData,
    });
  }
};

module.exports.saveAUser = (req, res) => {
  const { name, gender, contact, address, photoUrl } = req.body;
  console.log(req.body);
  if (!name || !gender || !contact || !address || !photoUrl) {
    return res.send({
      status: 406,
      success: false,
      result: "Please provide all of the necessary data (gender, name, contact, address and photoUrl).",
    });
  } else {
    allData.push({ id: allData.length + 1, ...req.body });
    fs.writeFileSync("./data.json", JSON.stringify(allData));

    res.send({
      status: 200,
      success: true,
      result: "New User added Successfully",
    });
  }
};

module.exports.updateAUser = (req, res) => {
  const { id } = req.params;
  const updateInfo = req.body;

  if (!id || isNaN(id)) {
    return res.send({
      status: 400,
      success: false,
      result: "Please provide a valid id you wants to update",
    });
  }
  if (!updateInfo) {
    return res.send({
      status: 400,
      success: false,
      result: "Please provide user info",
    });
  }

  let updateUser = allData.find((user) => user.id === Number(id));
  if (!updateUser) return res.send({ status: 404, success: false, result: "No user found on this id" });

  const index = allData.indexOf(updateUser);

  allData[index] = updateUser = {
    id: Number(id),
    ...updateUser,
    ...req.body,
  };

  fs.writeFileSync("data.json", JSON.stringify(allData));
  res.send({ status: 200, success: true, result: "User Updated Successfully" });
};

module.exports.deleteAUser = (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.send({
      status: 400,
      success: false,
      result: "Please provide the valid id to Delete the user",
    });
  }
  const newData = allData.filter((user) => user.id !== Number(id));
  fs.writeFileSync("data.json", JSON.stringify(newData));

  res.send({
    status: 200,
    success: true,
    result: "User Deleted Successfully",
  });
};
