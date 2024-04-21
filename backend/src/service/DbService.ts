import config from "../config";
import logger from "../logger";
import { Constants } from "../const/Constants";
import { In, Not, Repository } from "typeorm";
import { Role } from "../orm/enums";
import dbConnector from "../orm/DbCreateConnection";
import { User } from "../orm/entities/User";

class DbService {

    /**
    * Function for adding new user in DB
    */
    async addUser(email: string, password: string, role: Role, emailVerificationStatus?: boolean, emailVerificationToken?: string, status?: boolean) {
        try {
            const dataSource = await dbConnector.getCurrentDataSource();
            const userRepository = dataSource.getRepository(User);
            const userDetails = new User();
            userDetails.email = email;
            userDetails.password = password;
            userDetails.role = role;
            if (emailVerificationStatus)
                userDetails.emailVerificationStatus = emailVerificationStatus;

            if (emailVerificationToken)
                userDetails.emailVerificationToken = emailVerificationToken;

            if (status)
                userDetails.status = status;

            const savedUserDetails = await userRepository.save(userDetails);
            return savedUserDetails;
        } catch (err) {
            logger.error(`Error in DbService:addUser = ${err}`)
            throw Constants.ErrorMessage.SOMETHING_WENT_WRONG;
        }
    }

    /**
    * Function for email status in DB
    */
    async updateEmailStatus(email: string) {
        try {
            const dataSource = await dbConnector.getCurrentDataSource();
            const userRepository = dataSource.getRepository(User);
            const userElement = await userRepository.update({ email }, { emailVerificationStatus: true })
            return userElement;

        } catch (err) {
            logger.error(`Error in DbService:updateEmailStatus = ${err}`)
            throw Constants.ErrorMessage.SOMETHING_WENT_WRONG;
        }
    }

    /** 
    * Function for checking user present in DB by email
    */
    async checkExistingUserByEmail(email: string) {
        try {
            const dataSource = await dbConnector.getCurrentDataSource();
            const userRepository = dataSource.getRepository(User);
            const userElement = await userRepository.find({ where: { email, status: true } });
            return userElement[0];
        } catch (err) {
            logger.error(`Error in DbService:checkExistingUserByEmail = ${err}`)
            throw Constants.ErrorMessage.SOMETHING_WENT_WRONG;
        }
    }

    /**
    * Function for getting email verification token from DB by email 
    */
    async getUserDetailsByVerificationToken(emailVerificationToken: string) {
        try {
            const dataSource = await dbConnector.getCurrentDataSource();
            const userRepository = dataSource.getRepository(User);
            const userElement = await userRepository.find({ where: { emailVerificationToken } });
            return userElement[0];
        } catch (err) {
            logger.error(`Error in DbService:getUserDetailsByVerificationToken = ${err}`)
            throw Constants.ErrorMessage.SOMETHING_WENT_WRONG;
        }
    }

    /**
    * Function for checking user present in DB by Id
    */
    async checkExistingUserById(id: number) {
        try {
            const dataSource = await dbConnector.getCurrentDataSource();
            const userRepository = dataSource.getRepository(User);
            const userElement = await userRepository.find({ where: { id, status: true } });
            return userElement[0];
        } catch (err) {
            logger.error(`Error in DbService:checkExistingUserById = ${err}`)
            throw Constants.ErrorMessage.SOMETHING_WENT_WRONG;
        }
    }

    async getAllUsers() {
        try {
            const dataSource = await dbConnector.getCurrentDataSource();
            const userRepository = dataSource.getRepository(User);
            const userList = await userRepository.find({ where: { role: Not(Role.ADMIN) } });
            return userList;
        } catch (err) {
            logger.error(`Error in DbService:getAllUsers = ${err}`)
            throw Constants.ErrorMessage.SOMETHING_WENT_WRONG;
        }
    }

}

const dbService: DbService = new DbService();
export default dbService;
