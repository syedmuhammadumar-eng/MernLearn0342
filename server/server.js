// #This is main entry point file, where Whole application runs here,  This is the center point of the application

//========================================================> IMPORTS 
import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";

//=========================================================> dot env config 
dotenv.config();

//=========================================================> database connection
connectDB();



//create rest object because we can not use express directly, so we create copy of that , we use express in "app" named variable ,so all the express functionalities comes into app var, then now you can create routes with the help of app and we have lots of methods in express, most famous is get() method
//rest object
const app = express();


//======================================================> MiddleWares
//morgan
app.use(morgan("dev"));

//Json middleware
app.use(express.json())

//cors
app.use(cors())


//===================================================================> Test/Dry
//Dummy Route To test the code other wise we will shift into Routes

//import route and create route here below
import userRoutes from './routes/auth/auth-routes.js'
app.use("/api/v1/user", userRoutes );


app.get("/", (req, res) => {
    return res.status(200).send("<h1> Welcome to node server </h1>");
});

//=================================================================> Server/Express
//we need port for listen so we define here.
//Port
const PORT = process.env.PORT || 8080;

//we say that, if we run server  so we say called it listen
//here there is a callback function so we can send any reponse 
//Listen
//before deploy our application first remove the 0.0.0.0 other wise it could be acessalbe for all , here i bind the our application with our local ip address
app.listen( PORT ,  () => {
    console.log(`Server Running on Port ${process.env.PORT || 8080}`)
})

//now you can test the server after running in Terminal like npm run server or node server.js
//http://localhost:8080/


