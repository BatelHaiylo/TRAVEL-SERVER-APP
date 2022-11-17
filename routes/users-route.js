const usersRoute = require('express').Router();
const {getAllData,addUser, checkUserData, getUserRegistrationData, checkUserAge, getUserFullData} = require('../controllers/users-crl')

usersRoute.get('/',getAllData);
usersRoute.post('/login',addUser);
usersRoute.post('/login/byAge',checkUserAge);
usersRoute.post('/login/email',checkUserData);
usersRoute.post('/userRegister',getUserRegistrationData);
usersRoute.put('/updateUserData',getUserFullData);

module.exports= usersRoute