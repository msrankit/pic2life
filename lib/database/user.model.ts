
import { model, models, Schema } from "mongoose";


const UserSchema = new Schema({
    ClerkId:{
        type: String,
        required:true,
        unique:true
    },
    Email:{type: String, require:true, unique:true },
    UserName:{type: String, require:true, unique:true},
    Photo:{type : String , require:true},
    firstName:{type: String},
    lastName:{type: String},
    planID:{
        type:Number,
        default:1
    },
    CreditBalance:{
        type:Number,
        default:10
    }
});

 export const User = models?.user || model('user',UserSchema)