const admin = require ("../model/user-model")
const bcrypt = require("bcryptjs")
const jwt = require ("jsonwebtoken")


exports.register =async(req,res)=>{
  let {password} =req.body
  const salt = await bcrypt.genSalt(10)
  password = await bcrypt.hash(password ,salt)

try {
  const result = await admin.create({
      name:req.body.name,
      email:req.body.email,
      password
  })
  res.json({
      message:"user Registered successfully",
      success:true,
      data:result
  })
} catch (error) {
  res.json({
      message:"failed to registered" + error
  })
}
}



exports.login  =async(req , res)=>{
    try {

        const {email , password} = req.body 
         const adminData = await admin.findOne({email})
         if(!adminData){ 
           return res.status(400).json({
                success:false,
                message:"email is not found",
            })
         }
       const verify = await bcrypt.compare(password , adminData.password)
       if(!verify){
           return res.status(400).json({
            success:false,
            message:"password do not match",

           })
       }
       const token  = await jwt.sign({adminId: adminData._id},`${ process.env.JWT_SECRET_KEY}`)
         res.json({
            success:true,
            message:"admin found",
            data:adminData,
            token,
        })
        } catch (error) {
            res.json({
                success:false,
                message:"email not found" + error,
            })
    }
}

exports.postadmin =async(req, res)=>{
  try {
    const result = await admin.create(req.body)
    res.json({
        success:true,
        message:"post admin ",
        data:result
    })

  } catch (error) {
    res.json({
        success:false,
        message:"error is here  " + error,
        data:null
    })
  }
}
exports.getadminId =async(req, res)=>{
  try {
    const result = await admin.findById(req.params._id)
    res.json({
        success:true,
        message:" admin id",
        data:result
    })

  } catch (error) {
    res.json({
        success:false,
        message:"error is here  " + error,
        data:null
    })
  }
}
exports.getALlUsers =async(req, res)=>{
  try {
    const result = await admin.find({isAdmin:false})
    res.json({
        success:true,
        message:" admin got",
        data:result
    })

  } catch (error) {
    res.json({
        success:false,
        message:"error is here  " + error,
        data:null
    })
  }
}
exports.deleteUsers =async(req, res)=>{
  try {
    const result = await admin.findByIdAndDelete(req.params.id)
    res.json({
        success:true,
        message:" user deleted successfully",
        data:result
    })

  } catch (error) {
    res.json({
        success:false,
        message:"error is here  " + error,
        data:null
    })
  }
}


