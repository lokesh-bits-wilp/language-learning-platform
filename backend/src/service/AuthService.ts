import { Constants } from "../const/Constants";
import bcrypt from "bcrypt";
import dbService from "./DbService";
import userTokenUtility from "../utils/UserToken";
import { Role } from "orm/enums";

class AuthService {

    async signup(email: string, password: string) {
        const userDetails = await dbService.checkExistingUserByEmail(email);
        if (userDetails)
            throw Constants.ErrorMessage.ALREADY_USER;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUserDetails = await dbService.addUser(email, hashedPassword, Role.USER);
        return newUserDetails;
    }

    async login(email: string, password: string) {
        const userDetails = await dbService.checkExistingUserByEmail(email);
        if (!userDetails)
            throw Constants.ErrorMessage.INVALID_USER;

        const isPasswordValid = await bcrypt.compare(password, userDetails.password);
        if (!isPasswordValid)
            throw Constants.ErrorMessage.INCORRECT_PASSWORD;

        const payload = {
            email: userDetails.email,
            role: userDetails.role,
        }
        const jwToken = await userTokenUtility.createJwtToken(payload);
        return {
            jwToken,
            userEmail: payload.email,
            role: payload.role
        };
    }

    async verifyEmail(token: string) {
        const decryptData = await userTokenUtility.decrypt(token);        
        const [userEmail, expiryTime] = decryptData.split("-");
        const currentTime = Date.now();
        if (Number(expiryTime) < currentTime)
            throw Constants.ErrorMessage.TIME_EXPIRED;
    
        const userDetails = await dbService.getUserDetailsByVerificationToken(token);
        if (userDetails.email !== userEmail) 
            throw Constants.ErrorMessage.INVALID_USER;
    
        const emailVerify = await dbService.updateEmailStatus(userEmail);
        return emailVerify.affected === 1;
    }
}

const authService: AuthService = new AuthService();
export default authService;
