import z from "zod";
import { generalFields } from "../../Middlewares/validation.middleware";

export const signupSchema = {
    body: z.strictObject({
        username: generalFields.username,
        email: generalFields.email,
        password: generalFields.password,
        confirmPassword: generalFields.confirmPassword
    }).refine((data) => data.confirmPassword === data.password,{
        message: "Password and confirm password must match",
    })
}
