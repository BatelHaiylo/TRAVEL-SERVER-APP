const statesRouter = require("express").Router();
const {getAllStates, addNewState, updateState, deleteState, getItemById} = require('../controllers/State-crl')

statesRouter.get('/getAll', getAllStates)
statesRouter.get('/get/:id', getItemById)
statesRouter.post('/addNew', addNewState)
statesRouter.put('/update/:id', updateState)
statesRouter.delete('/delete/:id', deleteState)

module.exports = {statesRouter}