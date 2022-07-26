const express = require('express')
const app = express()
const env = require("dotenv")
env.config({path:"./config/.env"})
const db = require("./config/db")
const cors = require("cors")
app.use(express.json())
app.use(express.static("public"))
app.use(cors())
db()
const products = require("./routes/product-route")
const isadmin = require("./routes/user-route")
app.use("/api/v1" ,products )
app.use("/api/v1", isadmin )
app.listen(process.env.PORT || 5000 ,  () => console.log(`http://localhost:${process.env.PORT}`))