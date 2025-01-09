import mongoose from 'mongoose'
// import bcrypt from 'bcryptjs'

//create mongoose sechemahere
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required'],
    },
    email:{
        type:String,
        required:[true, 'email is required'],
        unique:[true, 'email is already taken']
    },
    password:{
        type:String,
        required:[true, 'password is required'],
        minLength:[6,'password length should be greater then 6 character']
    },
    address:{
       type: String,
        required:[true, 'address is required']
    },
    city:{
        type:String,
        required:[true,'city name is required']
    },
    country:{
        type:String,
        required:[true, 'country name is required']
    },
    phone:{
        type:String,
        required:[true, 'phone number is required']
    },
    profilepic:{
        type:String,
    }

    // you can add more schema later on below
},{timestamps:true});


import bcrypt from 'bcryptjs'

//1
//we can create function for hashing here , but we can create in another file in middleware
//hash function, (you dont need to learn hashing just go to documents and use it)
userSchema.pre('save', async function(){
    this.password = await bcrypt.hash(this.password, 10)
});

//2-
//but dring login we dcrypt this too
//compare function for login
userSchema.methods.comparePassword = async function(plainPassword){
    return await bcrypt.compare(plainPassword, this.password)
};



//export this model
export const userModel = mongoose.model("Users", userSchema );
export default userModel;