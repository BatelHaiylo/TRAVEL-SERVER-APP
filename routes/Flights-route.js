const flightsRoute = require("express").Router();
const {
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
} = require("../controllers/flights-crl");

flightsRoute.get("/", getAllData);
flightsRoute.get("/byId/:id", getFlightById);
flightsRoute.get("/byFlightNum/:flightNumber", getFlightByFlightNumber);
flightsRoute.get("/filter/IsThereFirstClass/:IsThereFirstClass",getFirstClassAvailableFlights);
flightsRoute.get("/filterBy/departureTime/:departureTime",getFlightByDepartureTime);
flightsRoute.get("/extendedData", addFieldToData);
flightsRoute.post("/add", addNewFlights);
flightsRoute.post("/matchingFlights/ByTakeOff&LandingTerminal", getMatchingFlightsByTakeOffAndLandingTerminal);
flightsRoute.post("/matchingFlights/ByDepartureTime&TakeOff&LandingTimeAndAvailableSeats", getMatchingFlightsByDepartureTimeAndTakeOffAndLandingTimeAndAvailableSeats);
flightsRoute.put("/update/byId/:id", updateFlight);
flightsRoute.delete("/delete/byId/:id", deleteAFlight);

module.exports =  flightsRoute ;
