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
    res.send({ success: true, result: result });
  } else {
    res.send({ success: true, result: allData });
  }
};
