"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthService {
    constructor() { }
    signup = async (req, res, next) => {
        const { username, email, password } = req.body;
        console.log({ username, email, password });
        return res.status(201).json({ message: "user created successfully" });
    };
    login = async (req, res, next) => {
        return res.status(200).json({ message: "user logged in successfully" });
    };
}
exports.default = new AuthService();
