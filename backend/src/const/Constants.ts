export class Constants {
    constructor() { }
    static Http = {
        OK: 200,
        CREATED: 201,
        ACCEPTED: 202,
        NO_CONTENT: 204,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        CONFLICT: 409,
        PRECONDITION_FAILED: 412,
        UNPROCESSABLE_ENTITY: 422,
        INTERNAL_SERVER_ERROR: 500,
    };

    static SuccessMessage = {
        SERVICE_ACTIVE: "OK BACKEND SERVICE",
        USER_REGISTERED: "Organization user has been registered",
        LOGIN_SUCCESS: "User has been logged-in",
        REGISTER_SUCCESS: "User has been registered",
        VERIFICATION_SUCCESS: "Email verification complete",
        USER_DETAILS: "User details fetch complete",
    };

    static ErrorMessage = {
        NO_DATA_FOUND: "No data found",
        UNPROCESSABLE_REQUEST: "Your request cannot be processed",
        SOMETHING_WENT_WRONG: "Oops, there was an internal error. No worries, we'll fix it!",
        AUTHORIZATION_FAILED: "You are not authorized to access this resource",
        MISSING_AUTHORIZATION_HEADERS: "Invalid authorization header",
        INVALID_PERMISSION: "You don't have permission to access this resource",
        MISSING_TOKEN: "Missing authorization token in header",
        MISSING_BEARER: "Missing bearer authentication in header",
        TOKEN_EXPIRED: "Authentication token expired",
        BAD_REQUEST:
            "We're sorry, but the request made is invalid. Please review your input and try again",
        USER_IDENTITY_EXISTS: "Identity for the user {} already exists in the wallet",
        USER_NOT_REGISTERED: "User not able to register for this department",
        INVALID_USER: "Invalid user",
        ALREADY_USER: "User already present",
        INCORRECT_PASSWORD: "Incorrect password",
        TIME_EXPIRED: "Time expired for verification"
    };

}
