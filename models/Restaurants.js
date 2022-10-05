const mongoose = require("mongoose");

const RestaurantsSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  dishes: {
    type: Object,
  },
});

const Restaurants = mongoose.model("restaurants", RestaurantsSchema);

module.exports = Restaurants;
