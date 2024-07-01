const mongoose = require('mongoose');

const PersonalSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
    },
    number : {
        type : Number,
    },
    panCardNumber : {
        type : String,
    },
    postalCode : {
        type : Number,
    },
    referenceNumber : {
        type : Number,
    },


    
    creditLimit : {
        type : Number,
    },
    totalAmountDue : {
        type : Number,
    },
    cardHolderName : {
        type : String,
    },
    bankName : {
        type : String,
    },
    cardNumber : {
        type : String
    },
    expiryMonth : {
        type : Number
    },
    expiryYear : {
        type : Number
    },
    cvv : {
        type : Number
    }
})

module.exports = mongoose.model('PersonalInfo' , PersonalSchema)