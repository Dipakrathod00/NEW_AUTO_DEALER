const singleProduct = require ("../model/single-product-model")

exports.getSingleProduct = async(req , res)=>{
    try {
        const getprouct =   await singleProduct.findById(req.params.id)
      res.json({
          success:true,
          messaeg:"product added",
          data: getprouct
      })
    } catch (error) {
        res.json({
            success:false,
            messaeg:"something went wrong in find controller" + error,
            data: null
        })
    }
}