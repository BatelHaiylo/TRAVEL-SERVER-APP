const express = require('express')
const {statesRouter} = require('./routes/State-route')
const {airlinesRoute} = require('./routes/Airlines-route')
const flightsRoute = require('./routes/Flights-route')
const usersRoute = require('./routes/users-route')
const cors = require('cors')

const usersData = require("./models/users-db");

const app = express()
const port = 7070

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());

const basicMiddleWare = (req,res,next) => {
    return (Object.keys(req.params).length != 0 )? console.log("there is params") : console.log("there is no params")
    next()
}

const flightsRouteMiddleWare = (req,res,next) => {
    console.log('this is flights endpoint')
    next()
}

const flightsRouteMiddleWareByMethod = (req,res,next) => {
    // req.method == "GET" ? console.log('correct'):console.log('incorrect')
    switch(req.method){
        case "GET":
            return console.log("request in get method");
        case "POST":
            return console.log("request in post method");
        case "PUT":
            return console.log("request in put/update method");
        case "DELETE":
            return console.log("request in delete method");
    }
    next()
}
middleware
const protectiveMiddleware = (req,res,next) => {
        const exsertingUser = usersData.find((user) => user.email == req.body.user.email);
        return exsertingUser? checkMatchingPasswords(req,exsertingUser,next) : res.send('user email not found')
}
const checkMatchingPasswords = (req,obj,next) => {
    return obj.password == req.body.user.password ? next() : res.send('password is invalid ,user not found')
}
// app.use(basicMiddleWare)

app.use('/states',statesRouter)
app.use('/airlines',airlinesRoute)
app.use('/flights',flightsRouteMiddleWareByMethod,flightsRoute)
app.use('/users',protectiveMiddleware,usersRoute)

app.get('/', (req,res)=>{ 
    res.send("server is working")
})

app.listen(port, ()=>{
    console.log(`server is listening in port ${port}`)
})