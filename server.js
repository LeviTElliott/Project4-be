require('dotenv').config();
const { PORT = 4000, MONGODB_URL } = process.env;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('./config/db.connection');

//Model
const Dog = require('./models');
const { dogs } = require('./models');




// MiddleWare
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
    res.redirect('/dogs')
})

 //Get Route
 app.get('/dogs', async (req, res) => {
    try {
        res.json(await dogs.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

//Show Route
app.get("/dog/:index", async (req, res) => {
   try {
    res.json(await dogs[req.params.id])
    console.log(req.params.id)
   } catch (error) {
    res.status(400).json(error);
}
})

// Create Route
app.post('/dog', async (req, res) => {
    try {
        res.json(await dogs.create(req.body))
    } catch (error) {
        res.status(400).json(error);
    }
})

//Delete Route
app.delete('/dog/:index', async (req, res) => {
    try {
        res.json(await dogs.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error);
    }
})

// Listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))