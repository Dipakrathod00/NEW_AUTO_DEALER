const express = require("express")

const { uploads } = require("../middleware/middleware")

const { postProduct, getProduct, deleteProduct, getloginData, getSingleProduct, updateProduct } = require("../controller/product-controller")

const router = express.Router()


router.route("/post").post(uploads.single("image"),postProduct)
//http://localhost:5000/api/v1/post
router.route("/get").get(getProduct)
// http://localhost:5000/api/v1/get
router.route("/delete/:id").delete(deleteProduct)
http://localhost:5000/api/v1/delete/62065ac53951b32774edfdd1
router.route("/update/:id").put(updateProduct)
http://localhost:5000/api/v1/update/62065ac53951b32774edfdd1
router.route("/find/:id").get(getloginData)
//http://localhost:5000/api/v1/find/62065ac53951b32774edfdd1
router.route("/find/single/:id").get(getSingleProduct)
//http://localhost:5000/api/v1/find/single/62065ac53951b32774edfdd1

module.exports = router