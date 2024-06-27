const OtpModel = require("../model/Otp.model")



exports.CreateOtp = async(req,res)=>{
    try {
        const {otp} = req.body

        if(!otp){
            return res.status(400).json({message:"Please enter otp"})
        }
        // const otpData = await Otp.findOne({otp})
        const newOtp = new OtpModel({
            otp
        })
        await newOtp.save()
        res.status(200).json({message:"Otp created successfully",data:newOtp})
    } catch (error) {
        console.log('error', error)
    }
}

exports.getOtp = async(req,res) => {
    try {
        const AllOtp = await OtpModel.find()
        res.status(200).json({
            success : true,
            message : 'All OTP',
            data : AllOtp
        })
    } catch (error) {
        console.log(error)
    }
}


exports.deleteotp = async (req, res) => {
    try {
      const otpId = req.params._id;
      const result = await OtpModel.deleteOne({ _id: otpId });
  
      if (result.deletedCount === 0) {
        return res.status(404).json({
          success: false,
          message: "No OTP found with the given ID!"
        });
      }
  
      res.status(200).json({
        success: true,
        message: "OTP has been deleted!",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error"
      });
    }
  };
  