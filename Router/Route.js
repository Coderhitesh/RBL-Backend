const express = require('express')
const { CreatePersonalInfo, GetPersonalInfo, deletePersonalInfo } = require('../controller/PersonalInfo.controller')
const { CreateOtp, getOtp, deleteotp } = require('../controller/otp.controller')

const router = express.Router()

router.post('/createPersonalInfo',CreatePersonalInfo)
router.get('/getPersonalInfo',GetPersonalInfo)
router.delete('/deletePersonalInfo/:_id',deletePersonalInfo)

router.post('/createOtp' , CreateOtp)
router.get('/getotp' , getOtp)
router.delete('/deleteotp/:_id' , deleteotp)

module.exports = router