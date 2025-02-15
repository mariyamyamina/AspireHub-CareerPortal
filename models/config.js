const mongoose=require("mongoose");
const connect = mongoose.connect('mongodb+srv://careerPortal:careerPortal@cluster0.ygonf.mongodb.net/Aspire-Hub?retryWrites=true&w=majority&appName=Cluster0');
connect.then(() => {
    console.log("DB connected successfully");
}).catch((err) => {
    console.log(err);
});
 const LoginSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
 });

const collection=mongoose.model("users",LoginSchema);
module.exports= collection;


