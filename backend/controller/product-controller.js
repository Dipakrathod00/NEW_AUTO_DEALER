const mongoose = require("mongoose")
const productModel =require("../model/product-model")

exports.postProduct = async(req , res)=>{
    console.log(req.body);
    try {
        const oneproduct =   await productModel.create(req.body)
      res.json({
          success:true,
          messaeg:"product added",
          data: oneproduct
      })
    } catch (error) {
        res.json({
            success:false,
            messaeg:"something went wrong in create controller" + error,
            data: null
        })
    }
}
exports.getProduct = async(req , res)=>{
    try {
        const getALlproduct =   await productModel.find()
      res.json({
          success:true,
          messaeg:"product added",
          data: getALlproduct
      })
    } catch (error) {
        res.json({
            success:false,
            messaeg:"something went wrong in find controller" + error,
            data: null
        })
    }
}
exports.getSingleProduct = async(req , res)=>{
    try {
        const singleproduct =   await productModel.findById(req.params.id)
      res.json({
          success:true,
          messaeg:"product added",
          data: singleproduct
      })
    } catch (error) {
        res.json({
            success:false,
            messaeg:"something went wrong in find controller" + error,
            data: null
        })
    }
}
exports.deleteProduct = async(req , res)=>{
    try {
        const singleproductdelete =   await productModel.findByIdAndDelete(req.params.id)
      res.json({
          success:true,
          messaeg:"product deleted",
          data: singleproductdelete
      })
    } catch (error) {
        res.json({
            success:false,
            messaeg:"something went wrong in find controller" + error,
            data: null
        })
    }
}
exports.updateProduct = async(req , res)=>{
    try {
        const singleproductupdate =   await productModel.findByIdAndUpdate(req.params.id , req.body , {new:true})
      res.json({
          success:true,
          messaeg:"product updated",
          data: singleproductupdate
      })
    } catch (error) {
        res.json({
            success:false,
            messaeg:"something went wrong in update controller" + error,
            data: null
        })
    }
}

exports.getloginData = async(req , res)=>{
    try {
        const result =   await productModel.find({userId:req.params.id})
      res.json({
          success:true,
          messaeg:"got Data",
          data:result 
      })
    } catch (error) {
        res.json({
            success:false,
            messaeg:"something went wrong in find controller" + error,
            data: null
        })
    }
}
