const bcrypt = require("bcryptjs")

const admins = [
   {
      name:"dipak",
      email:"dipak@gmail.com",
      password: bcrypt.hashSync("123", 10),
      isAdmin:true

   },
   {
      name:"bharat",
      email:"bharat@gmail.com",
      password: bcrypt.hashSync("123", 10),
      isAdmin:false

   },
   {
      name:"akash",
      email:"akash@gmail.com",
      password: bcrypt.hashSync("123", 10),
      isAdmin:false

   }
]
module.exports = admins