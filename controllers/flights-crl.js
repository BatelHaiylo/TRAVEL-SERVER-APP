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
  const newArray = flightsData.filter(
    (item) => item.IsThereFirstClass == req.params.IsThereFirstClass
  );
  newArray
    ? res.send({ message: "success", newArray })
    : res.send({ message: "no items found" });
};

const getFlightByDepartureTime = (req, res) => {
  const newArray = flightsData.filter(
    (item) => item.departureTime == req.params.departureTime
  );
  newArray
    ? res.send({ message: "success", newArray })
    : res.send({ message: "no items found" });
};

const addFieldToData = async (req, res) => {
  try {
    return flightsData
      .map(
        (obj) =>
          (obj.availableSeats = `${Math.floor(
            Math.random() * obj.NumberOfSeats
          )}`)
        // (obj = {...obj,availableSeats: Math.floor(Math.random() * obj.NumberOfSeats)})
      )
      .then(res.send({ message: "success", flightsData }));
  } catch (error) {
    res.send({ message: "there has been an error" });
  }
};

const getMatchingFlightsByTakeOffAndLandingTerminal = async (req, res) => {
  try {
    const newArray = flightsData.filter(
      (item) =>
        item.landing == req.body.input.landing &&
        item.takeOff == req.body.input.takeOff
    );
    newArray
      ? res.send({ message: "success", newArray })
      : res.send({ message: "no items found" });
  } catch (error) {
    res.send({ message: "there has been an error" });
  }
};

// id: 9,
// flightNumber: 2258,
// takeOff: "Terminal 2",
// landing: "Terminal 3",
// NumberOfSeats: 15,
// departureTime:"09:30",
// landingTime: "12:00",
// IsThereFirstClass: 'false',
const getMatchingFlightsByDepartureTimeAndTakeOffAndLandingTimeAndAvailableSeats =
  async (req, res) => {
    try {
      const newArray = flightsData.filter(
        (item) =>
          item.departureTime == req.body.input.departureTime &&
          item.takeOff == req.body.input.takeOff &&
          item.availableSeats > 0
      );
      return newArray
        ? res.send({ message: "success", newArray })
        : res.send({ message: "no items found" });
    } catch (error) {
      res.send({ message: `there has been an error: ${error}` });
    } finally {
      addFieldToData(req, res);
    }
  };

module.exports = {
  getAllData,
  addNewFlights,
  updateFlight,
  deleteAFlight,
  getFlightById,
  getFlightByFlightNumber,
  getFirstClassAvailableFlights,
  getFlightByDepartureTime,
  addFieldToData,
  getMatchingFlightsByTakeOffAndLandingTerminal,
  getMatchingFlightsByDepartureTimeAndTakeOffAndLandingTimeAndAvailableSeats
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
