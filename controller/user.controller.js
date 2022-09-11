const allData = require("../data.json");

module.exports.getRamdomUser = (req, res) => {
  const randomNum = Math.floor(Math.random() * allData.length + 1);
  const randomPerson = allData.find((user) => user.id === randomNum);
  console.log(randomPerson);
  res.send({ success: true, result: randomPerson });
};

module.exports.getAllData = (req, res) => {
  const limit = Number(req.query?.limit);
  const result = allData.slice(0, limit);
  if (limit) {
    res.send({ status: 200, success: true, result: result });
  } else {
    res.send({ status: 200, success: true, result: allData });
  }
};

module.exports.saveAUser = (req, res) => {
  const { id, name, gender, contact, address, photoUrl } = req.body;
  console.log(req.body);
  if (!id || !name || !gender || !contact || !address || !photoUrl) {
    res.send({
      status: 406,
      success: false,
      result: "Not Acceptable",
    });
  } else {
    allData.push({ id, name, gender, contact, address, photoUrl });
    res.send({ status: 200, success: true, result: "New User added Successfully" });
  }
};
