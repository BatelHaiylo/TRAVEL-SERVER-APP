const express = require('express')
const {statesRouter} = require('./routes/State-route')
const {airlinesRoute} = require('./routes/Airlines-route')
const {flightsRoute} = require('./routes/Flights-route')
const cors = require('cors')

const app = express()
const port = 7070

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/states',statesRouter)
app.use('/airlines',airlinesRoute)
app.use('/flights',flightsRoute)

app.get('/', (req,res)=>{
    res.send("server is working")
})

app.listen(port, ()=>{
    console.log(`server is listening in port ${port}`)
})