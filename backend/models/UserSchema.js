import mongoose from "mongoose";


const UserSchema =new mongoose.Schema({
    email :{type: String, required: true , required: true,unique: true},
    password:{type: String, required: true },
    name: {type: "string", required: true},
    phone: {type: Number },
    role:{
        type:String,
        enum: ["patient","admin"],
        default: "patient",
    },
    gender:{type: String,  enum: ["male","female"] },
    bloodType: {type: String, required: true },
    appointments :[{type:mongoose.Type.ObjectId, ref:"Appointment"}],


});
export default mongoose.model("User",UserSchema);