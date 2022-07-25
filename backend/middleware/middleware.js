const multer = require("multer")
const path = require("path")

const storage  = multer.diskStorage({
    destination: function (req, file, cd ) {
        cd(null , "public/uploads")
    },
    filename: function (req , file , cd) {
        console.log(file );
        const ext = path.extname(file.originalname)
        console.log(ext);
        const carname = Date.now() + ext
        req.body.image = `uploads/${carname}`
        cd(null , carname);
    }
})
exports.uploads = multer({
    storage:storage,
    fileFilter:(req, file, cb)=>{
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype =="image/jpeg"){
            cb(null , true);
        }else{
            cb(null ,false);
            return cb(new Error("Only .png, .jpg and .jpeg format allowed!"))
        }
    }    
})