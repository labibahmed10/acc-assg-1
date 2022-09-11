const allData = require("../data.json");

module.exports.getAllData = (req, res) => {
  const limit = Number(req.query?.limit);
  const result = allData.slice(0, limit);
  if (limit) {
    res.send({ success: true, result: result });
  } else {
    res.send({ success: true, result: allData });
  }
};
