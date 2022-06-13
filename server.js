require('dotenv').config();
const { PORT = 4000, MONGODB_URI } = process.env;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

mongoose.connect(MONGODB_URI);

mongoose.connection
.on('open', () => console.log('you are connected!'))
.on('close', () => console.log('you are disconnected!'))
.on('error', (error) => console.log(error))


//Schema model
const dogSchema = new mongoose.Schema({
    breed: String,
    coat: String,
    size: String,
    maintenance: String,
    shedding: String,
    pollen: Boolean,
    breedName: String,
    furAllergen: Boolean,
    hypoAllergenic: Boolean,
});

const doggs = mongoose.model('doggs', dogSchema);

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
 app.get('/doggs', async (req, res) => {
    try {
        res.json(await doggs.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
})

//Show Route
app.get("/doggs/:id", async (req, res) => {
   try {

    res.json(await doggs[req.params.breedName])
    console.log(req.params.breedName)
   } catch (error) {
    res.status(400).json(error);
}
})

// Create Route
app.post('/doggs', async (req, res) => {
    try {
        res.json(await doggs.create(req.body))
    } catch (error) {
        res.status(400).json(error);
    }
})

//Delete Route
app.delete('/doggs/:id', async (req, res) => {
    try {
        res.json(await doggs.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error);
    }
})

// Listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))