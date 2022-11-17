const usersData = require("../models/users-db");
const {
  isUserPasswordsMatch,
  isUserEmailValid,
  isUserDataValid,
  isUserIsAnAdult,
} = require("../validation/userValidation");

const getAllData = (req, res) => {
  res.send({ message: "success", usersData });
};

const addUser = (req, res) => {
  isUserPasswordsMatch(req.body.user.password, req.body.user.passwordValidation)
    ? res.send({ message: "welcome, register successfully" })
    : res.send(`there has been an error: ${error}`);
};

const checkUserData = (req, res) => {
  return isUserEmailValid(req.body.user.email)
    ? res.send({ message: "valid email" })
    : res.send({ message: "invalid email" });
};

const checkUserAge = (req, res) => {
  return isUserIsAnAdult(req.body.user.dateOfBirth)
    ? res.send({ message: "user is older then 18" })
    : res.send({ message: "user is younger then 18" });
  // res.send(isUserIsAnAdult(req.body.user.dateOfBirth))
};

const getUserRegistrationData = (req, res) => {
  isUserDataValid(req.body.user)
    ? res.send({ message: "user data is valid" })
    : res.send({ message: "something went wrong , please re-enter your data" });
};

const getUserFullData = (req, res) => {
  if (isUserDataValid(req.body.user)){
    usersData.map((obj, index) => {
      obj = {
        id: `${index}`,
        token: `${Math.floor(Math.random() * 10000)}`,
        ...obj,
      }
    });
    res.send({message: "success", usersData});
  }
  res.send({message: "there has been an error"});
};

module.exports = {
  getAllData,
  addUser,
  checkUserData,
  getUserRegistrationData,
  checkUserAge,
  getUserFullData
};

const getItemIndexByEmail = (req, arr) => {
  const wantedItem = arr.find((item) => item.email == req.params.user.email);
  return arr.indexOf(wantedItem);
};
