import nodemailer from 'nodemailer';
import config from "../config";

class EmailUtility {
    private host: string;
    private port: number;
    private user: string;
    private pass: string;
    
    constructor() {
        this.host = config.EMAIL_HOST;
        this.port = config.EMAIL_PORT;
        this.user = config.EMAIL_USER;
        this.pass = config.EMAIL_PASSWORD;
    }

    async createTransporter() {
        return nodemailer.createTransport({
            host: this.host,
            port: this.port,
          auth: {
            user: this.user,
            pass: this.pass,
          },
        });
    }

    /**
    * Sends a verification email to a user.
    * @param toEmail - The recipient's email address.
    * @param subject - Subject for email
    * @param text - The text to be sent in mail.
    */
    async sendVerificationEmail(toEmail: string, subject: string, text: string): Promise<boolean> {
        const transporter = await this.createTransporter();
        try {
        const mailOptions = {
            from: this.user,
            to: toEmail,
            subject: subject,
            text: text,
            // HTML version of the email can be provided as 'html' property.
        };        
        await transporter.sendMail(mailOptions);
        return true;
        } catch (error) {
        throw error;
        }
    }

}

const emailUtility: EmailUtility = new EmailUtility();
export default emailUtility;

