const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name: { type: String,
    },
    size: { type: String,
    },
    url: { type: String,
    },
    
});

const dogs = mongoose.model('dogs', dogSchema);
module.exports = dogs;