const mongoose = require('mongoose')

const ConnectDB = async() => {
    try {
        const Link = process.env.MongoLink
        await mongoose.connect(Link)
        console.log('MongoDB Connected')
    } catch (error) {
        console.log(
            error
        )
    }
}

module.exports = ConnectDB

