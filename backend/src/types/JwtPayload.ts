import { Role } from "../orm/enums";

export type JwtPayload = {
    email: string,
    role: Role,
};

export type LoginJwtPayload = {
    sub: string;
    role: Role;
};

