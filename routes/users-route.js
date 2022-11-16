const usersRoute = require('express').Router();
const {getAllData,getLoginData} = require('../controllers/users-crl')

usersRoute.get('/',getAllData);
usersRoute.get('/getByEmail/:email', getLoginData);

module.exports= usersRoute