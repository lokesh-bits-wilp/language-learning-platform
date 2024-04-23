import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, JoinColumn, OneToOne, ManyToOne } from "typeorm"
import { Role } from "../enums";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true,
        name: 'email'
    })
    email: string;

    @Column({
        nullable: false,
        name: 'password'
    })
    password: string;

    @Column({
        nullable: true,
        name: 'firstName'
    })
    firstName: string;

    @Column({
        nullable: true,
        name: 'lastName'
    })
    lastName: string;

    @Column({
        type: "enum",
        enum: Role,
        name: "role"
    })
    role: Role;

    @Column({
        name: 'email_verification_token',
        nullable: true,
    })
    emailVerificationToken: string;

    @Column({
        nullable: false,
        name: "email_verification_status",
        default: false
    })
    emailVerificationStatus: boolean;

    @Column({
        nullable: false,
        name: "status",
        default: true
    })
    status: boolean;

    @Column()
    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @Column()
    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

}
