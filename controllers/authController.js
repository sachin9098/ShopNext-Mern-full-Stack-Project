const User = require('../model/userModel');

// logic for register Users
const registerUser = async (req,res) =>{
    const{name,email,password} = req.body;
    try{
        const existingUser = await user.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"user already exists"});
        }

        // Todos: hash the password before saving the user
        // Todos: jwt authentication token generation
        //Todos: otp sending and verification for email confirmation
        // Todos: send welcome to the user on email
        const newUser = new user({name,email,password});
        await newUser.save();
        return res.status(201).json({message:"User registered successfully"});
    }
    catch(err){
        return res.status(500).json({message:"Server error"});
    }
};