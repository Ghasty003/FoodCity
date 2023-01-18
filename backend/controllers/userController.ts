import Users from "../models/userModel";
import jwt, { Secret } from "jsonwebtoken";
import { Request, Response } from "express";
import mongoose from "mongoose";

class UserController {

    public createToken(_id: string) {
        return jwt.sign({_id}, (process.env.SECRET as Secret), {expiresIn: "3d"});
    }

    public async SignInUser(req: Request, res: Response) {

        const { email, password } = req.body;

        try {
            const user: any = await Users.signup(email, password);
            const token = this.createToken(user._id);

            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({error: (error as Error).message})
        }
    }
}

const userController = new UserController();

export default userController;