const express = require ("express")

const { login, postadmin, getadminId, getALlUsers, register, deleteUsers} = require("../controller/user-controller")

const router = express.Router()

   router.route("/login").post(login)
   router.route("/login/:id").get(getadminId)
   router.route("/admin/login").post(postadmin)
   router.route("/adminlogin").get(getALlUsers)
   router.route("/user_register").post(register)
   router.route("/user_delete/:id").delete(deleteUsers)

module.exports = router





