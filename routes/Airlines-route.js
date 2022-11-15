const airlinesRoute = require('express').Router();
const {getAllData,getDataByName,addNewCompany,deleteACompany, getDataByCountry} = require('../controllers/Airlines-crl');

airlinesRoute.get('/', getAllData);
airlinesRoute.get('/byName/:companyName', getDataByName);
airlinesRoute.get('/byCountry/:OriginCountry', getDataByCountry);
airlinesRoute.post('/add', addNewCompany);
airlinesRoute.delete('/delete/:id', deleteACompany);

module.exports = {airlinesRoute};