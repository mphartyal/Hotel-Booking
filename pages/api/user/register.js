import connectDB from "@/db";
import { userAgent } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "@/models/user-model";

export default async function handler(req,res){
    if(req.method === "POST"){
        connectDB();
        const{name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({msg: "All Fields are mandatory"});

        }

        const emailExists = await User.findOne({email});
        if(emailExists){
            return res.status(400).json({msg: "User already registered!"});

        }

        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,

        });

        const result = await newUser.save();
        const token = jwt.sign({token: result._id}, process.env.JWT_SECRET , {expiresIn: "30d",});
        return res.status(201).json({msg: "Registered Successfully!", token});
    }
}