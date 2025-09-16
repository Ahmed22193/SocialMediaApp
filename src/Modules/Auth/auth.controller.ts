import { Router } from "express";
import AuthService from "./auth.service";
import { validation } from "../../Middlewares/validation.middleware";
import { signupSchema } from "./auth.validation";
const router: Router = Router();

router.get("/signup", validation(signupSchema), AuthService.signup);
router.post("/login", AuthService.login);

export default router;