const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const Dog = mongoose.model('dogs', dogSchema);
module.exports = Dog;