const usersData = require("../models/users-db");

const getAllData = (req, res) => {
  res.send({ message: "success", usersData });
};

const getLoginData = (req, res) => {
  const wantedUserIndex = getItemIndexByEmail(req, usersData);
  if (wantedUserIndex > -1) {
    res.send({ message: "success", output: usersData[wantedUserIndex] });
  }
  res.send({ message: "item not found" });
};

module.exports = { getAllData,getLoginData };

const getItemIndexByEmail = (req, arr) => {
  const wantedItem = arr.find((item) => item.email == req.params.user.email);
  return arr.indexOf(wantedItem);
};

