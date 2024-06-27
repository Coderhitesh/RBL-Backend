const mongoose = require('mongoose')

const otpSchema = new mongoose.Schema({
    otp : {
        type : Number
    }
})

module.exports = mongoose.model('otp',otpSchema)