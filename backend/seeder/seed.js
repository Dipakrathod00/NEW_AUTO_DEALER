const env  = require("dotenv")
const db = require ("../config/db")
env.config({path:"../config/.env"})


const admin = require("./data/admin")

const adminmodel = require("../model/admin-model")

const insertdata = async()=>{
    try {
        db()
        await adminmodel.deleteMany()
        const result = await adminmodel.create(admin)
        const mainadmin = result[0]._id
        const sampleData = product.map(item=>{
            return{...item , adminId:mainadmin}
        })
        console.log(sampleData);
        console.log("data added in database succesfully");
        process.exit()
    } catch (error) {
       console.log(error);        
    }
}

const deletedata = async()=>{
    try {
        db()
        await adminmodel.deleteMany()
        console.log("data deleted successfully");
        process.exit()
    } catch (error) {
        console.log(error);
    }
}

if(process.argv[2] ==="-c"){
    insertdata()
    console.log("data added successfully");
}else if ( process.argv[2]==="-d"){
    deletedata()
    console.log("data deleted successfully");
}else{
    console.log("Invalid input");
}