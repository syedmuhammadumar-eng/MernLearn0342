//here we work on user controller

// import user model, here we only imort user function instead of whole file
// import {User} from '../../models/UserModel.js'
import userModel from '../../models/UserModel.js'


// user controller

export const registerControler = async (req,res) => {
    try{

        // get data from the user, all those data  that we define in models> user schema and names should be same like name: in schema so name: in also same in controller
        //destructue data from the req 
        const {name,email,password,address,city,country,phone,profilepic} = req.body

        //1- validation to check all data is coming or not
        if(!name | !email || !password || !city || !address || !country){
            return res.status(500).send({
                success: false,
                message: "please provide All Fields"
            });
        }


        //2- Check the Existing user
        //here we use mongodb function: findOne and destructue the email 
        const existingUser = await userModel.findOne({email})

        //3- validation
        //it tells that user is already is in the database
        if(existingUser){
            return res.status(500).send({
                success:false,
                message: "email already taken",
            })
        }


        //save the user
        const user = await userModel.create({
            name,
            email,
            password,
            city,
            address,
            country,
            profilepic,
            phone
        });

        res.status(201).send({
            success: true,
            message: 'Registeration Success, please login',
            user,
        });

        

    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error In Register API',
            error,
        });
    }
};

//login
export const loginController = async (req, res) => {
    try{
        const {email,password} = req.body
        //validation
        if(!email || !password){
            return res.status(500).send({
                success:false,
                message:'pleae add email or password'
            })
        }

        //check user
        const user = await userModel.findOne({email})

        //user validation
        if(!user){
            return res.status(404).send({
                success:false,
                message: 'User not found'
            })
        }
        
        //decrpt the user password
        const isMatch = await user.comparePassword(password);

        //validaton
        if(!isMatch){
            return res.status(500).send({
                success:false,
                message:'invalid credentials'
            })
        }
        res.status(200).send({
            success:true,
            message:'login seuccessfully',
            user,

        })


    } catch(error){
        console.log(error)
        res.status(500).send({
            success: "false",
            message: "error in login api",
            error
        })
    }
};
