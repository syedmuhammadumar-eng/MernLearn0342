// # MongoDB connection setup

//  Import moongoose
import mongoose from 'mongoose'


// Functin to connect with database
const connectDB = async()=> {
    try{
        // success case here
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongodb Connected ${mongoose.connection.host}`)

    } catch(error){
        console.log(`Mongodb Erro ${error}`)
    }
};

export default connectDB;