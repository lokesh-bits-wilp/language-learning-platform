import { Constants } from "../const/Constants";
import bcrypt from "bcrypt";
import dbService from "./DbService";
import userTokenUtility from "../utils/UserToken";
import { Role } from "orm/enums";

class LanguageService {

    async getLanguageByUser(email: string, userId: number) {
        const userDetails = await dbService.checkExistingUserByEmail(email);
        if (!userDetails)
            throw Constants.ErrorMessage.INVALID_USER;

        const languageDetails = await dbService.getAllLanguagesByUser(userId);

        return languageDetails;
    }

    async getLanguages() {
        const languageDetails = await dbService.getAllLanguages();

        return languageDetails;
    }
}

const languageService: LanguageService = new LanguageService();
export default languageService;
