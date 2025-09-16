"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const validation_middleware_1 = require("../../Middlewares/validation.middleware");
exports.signupSchema = {
    body: zod_1.default.strictObject({
        username: validation_middleware_1.generalFields.username,
        email: validation_middleware_1.generalFields.email,
        password: validation_middleware_1.generalFields.password,
        confirmPassword: validation_middleware_1.generalFields.confirmPassword
    }).refine((data) => data.confirmPassword === data.password, {
        message: "Password and confirm password must match",
    })
};
