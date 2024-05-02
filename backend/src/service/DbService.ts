import config from "../config";
import logger from "../logger";
import { Constants } from "../const/Constants";
import { In, Not, Repository } from "typeorm";
import { Role } from "../orm/enums";
import dbConnector from "../orm/DbCreateConnection";
import { User } from "../orm/entities/User";
import { Languages } from "orm/entities/Languages";
import { UserSubscribedLanguages } from "orm/entities/UserSubscribedLanguage";

class DbService {

    /**
    * Function for adding new user in DB
    */
    async addUser(email: string, password: string, firstName: string, lastName: string, role: Role, emailVerificationStatus?: boolean, emailVerificationToken?: string, status?: boolean) {
        try {
            const dataSource = await dbConnector.getCurrentDataSource();
            const userRepository = dataSource.getRepository(User);
            const userDetails = new User();
            userDetails.email = email;
            userDetails.password = password;
            userDetails.firstName = firstName;
            userDetails.lastName = lastName;
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
            const userElement = await userRepository.findOne({ where: { email, status: true } });
            return userElement;
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

    /**
    * Function for updating profile
    */
    async updateProfile(email: string, firstName: string, lastName: string) {
        try {
            const dataSource = await dbConnector.getCurrentDataSource();
            const userRepository = dataSource.getRepository(User);
            const userElement = await userRepository.update({ email }, { firstName, lastName })
            return userElement;
        } catch (err) {
            logger.error(`Error in DbService:updateEmailStatus = ${err}`)
            throw Constants.ErrorMessage.SOMETHING_WENT_WRONG;
        }
    }

    /**
    * Function to get all users
    */
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

    /**
    * Function to get all languages
    */
    async getAllLanguages() {
        try {
            const dataSource = await dbConnector.getCurrentDataSource();
            const languagesRepository = dataSource.getRepository(Languages);
            const languages = await languagesRepository.find();            
            return languages;
        } catch (err) {
            logger.error(`Error in DbService:getAllLanguages = ${err}`)
            throw Constants.ErrorMessage.SOMETHING_WENT_WRONG;
        }
    }

    /**
    * Function to get all languages by user
    */
    async getAllLanguagesByUser(userId: number) {
        try {
            const dataSource = await dbConnector.getCurrentDataSource();
            const languagesRepository = dataSource.getRepository(Languages);
            const subscriptionRepository = dataSource.getRepository(UserSubscribedLanguages);
            const languages = await languagesRepository.find();
            let userSubscriptions = [];
            if (userId) {
                userSubscriptions = await subscriptionRepository.find({
                    where: {
                        userId: userId
                    },
                    relations: ['languageId']
                });
            }
            const subscribedLanguages = userSubscriptions.map(subscription => subscription.language.id);

            const languagesWithSubscriptionInfo = languages.map(language => {
                return {
                    ...language,
                    subscribed: subscribedLanguages.includes(language.id)
                };
            }); 
            return languagesWithSubscriptionInfo;
        } catch (err) {
            logger.error(`Error in DbService:getAllLanguagesByUser = ${err}`)
            throw Constants.ErrorMessage.SOMETHING_WENT_WRONG;
        }
    }

}

const dbService: DbService = new DbService();
export default dbService;
