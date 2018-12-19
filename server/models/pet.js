console.log("inside of foodtruck.js");



const mongoose = require("mongoose");


const PetSchema = new mongoose.Schema({

    name: {

        type: String, 

        required: [true, "Pet must have a name"], 

        maxlength: 255

    },

    type: {

        type: String, 

        required: [true, "type is required"], 

        minlength: [3, "type must be at least 3 characters"], maxlength: 255

    },

    description: {

        type: String, 

        required: [true, "You need to describe the pet"], 

        minlength: [3, "Description must be at least 3 characters"]

    },
    
    skill1: {

        type: String,  

    },
   
    skill2: {

        type: String,  

    },
    
    skill3: {

        type: String,  

    },

    likes: {

        type: Number,

        default: 0

    }

}, {timestamps: true});



mongoose.model('Pet', PetSchema);