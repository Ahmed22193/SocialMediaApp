import type { NextFunction, Request, Response } from "express";
import { IsignupDTO } from "./auth.DTO";



class AuthService {
    constructor() {}
    public signup = async (req: Request, res: Response ,next: NextFunction): Promise<Response> =>{
        const {username,email,password}: IsignupDTO = req.body;
        console.log({username,email,password});
        
        return res.status(201).json({ message: "user created successfully" });
    };
    public login = async (req: Request, res: Response ,next: NextFunction): Promise<Response> => {
        return res.status(200).json({ message: "user logged in successfully" });
    };
}

export default new AuthService();
