const flightsData = require("../models/flights-db");

const getAllData = (req, res) => {
  res.send({ message: "success", flightsData });
};

// const getDataByName=(req,res)=>{
//     const itemIndex = getItemIndexByName(req,flightsData)
//     res.send({message:'success', output: flightsData[itemIndex]})
// }

const addNewFlights = (req, res) => {
  flightsData.push(req.body.flight);
  res.send({ message: "success", flightsData });
};

const updateFlight = (req, res) => {
  const itemIndex = getItemIndexById(req, flightsData);
  if (itemIndex > -1) {
    flightsData[itemIndex] = req.body.flight;
    res.send({ message: "success", flightsData });
  }
  res.send({ message: "item not found" });
};

const deleteAFlight = (req, res) => {
  const itemIndex = getItemIndexById(req, flightsData);
  if (itemIndex > -1) {
    flightsData.splice(itemIndex, 1);
    res.send({ message: "success", flightsData });
  }
  res.send({ message: "item not found" });
};

const getFlightById = (req, res) => {
  const itemIndex = getItemIndexById(req, flightsData);
  if (itemIndex > -1) {
    res.send({ message: "success", output: flightsData[itemIndex] });
  }
  res.send({ message: "item not found" });
};

const getFlightByFlightNumber = (req, res) => {
  const itemIndex = getItemIndexByFlightNum(req, flightsData);
  if (itemIndex > -1) {
    res.send({ message: "success", output: flightsData[itemIndex] });
  }
  res.send({ message: "item not found" });
};

const getFirstClassAvailableFlights = (req, res) => {
    const newArray = flightsData.filter(item => item.IsThereFirstClass == req.params.IsThereFirstClass);
    newArray ?  res.send({message:'success',newArray}) : res.send({message:'no items found'})
};

const getFlightByDepartureTime = (req, res) => {
    const newArray = flightsData.filter(item => item.departureTime == req.params.departureTime);
    newArray ? res.send({message:'success',newArray}) : res.send({message:'no items found'})
};

const  addFieldToData = async(req,res) => {
    try{
        return flightsData.map(obj=>
            obj = {availableSeats:Math.floor(Math.random()*60),...obj})
            // obj.availableSeats = Math.floor(Math.random()*60) )
            .then(flightsData=>res.send({message:'success',flightsData}))
        }catch(error){res.send({message:'there has been an error'})}
    }

module.exports = {
  getAllData,
  addNewFlights,
  updateFlight,
  deleteAFlight,
  getFlightById,
  getFlightByFlightNumber,
  getFirstClassAvailableFlights,
  getFlightByDepartureTime,
  addFieldToData
};

const getItemIndexByFlightNum = (req, arr) => {
  const wanntedItem = arr.find(
    (item) => item.flightNumber == req.params.flightNumber
  );
  return arr.indexOf(wanntedItem);
};
const getItemIndexByCountry = (req, arr) => {
  const wanntedItem = arr.find(
    (item) => item.OriginCountry == req.params.OriginCountry
  );
  return arr.indexOf(wanntedItem);
};
const getItemIndexById = (req, arr) => {
  const wanntedItem = arr.find((item) => item.id == req.params.id);
  return arr.indexOf(wanntedItem);
};
