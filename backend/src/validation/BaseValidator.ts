import * as inputValidator from "node-input-validator";
import { Constants } from "../const/Constants";

/**
 * Custom validation to check if the selected value is valid or not
 */

inputValidator.extend("isValidPassword", async ({ value, args }) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?!.*\s).{8,}$/;
    if (!value.match(passwordRegex)) {
        return true;
    }
    return false;
});

inputValidator.extendMessages(
    {
        required: "The :attribute field must not be empty",
        isValidPassword: "The :attribute is not a valid password",
        arrayLengthMatch: "The :attribute fields parameters have length mismatch",
        minLength: "The :attribute must be at least :arg0 characters long",
        maxLength: "The :attribute must be at most :arg0 characters long"
    },
    "en"
);

const baseValidator = inputValidator;
export default baseValidator;
