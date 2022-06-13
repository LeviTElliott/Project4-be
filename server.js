// Dependencies
const express = require("express")
const PORT = process.env.PORT || 4000
const cors = require("cors");
const { Dog } = require("./models");

//Application Object
const app = express()
require("./config/db.connection");

// MiddleWare
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());


// Routes
app.get("/", (req, res) => {
    res.json({
        response: "Hello World"
    })
})

 //Index Route
app.get("/dogs", (req, res) => {
    res.json(Dog)
})

//Show Route
app.get("/dogs/:id", (req, res) => {
    res.json(Dog[req.params.breed])
    console.log(req.params.breed)
})

// Create Route
app.post("/dogs", (req, res) => {
    dog.push(req.body)
    res.json(dog)
})

// Listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))