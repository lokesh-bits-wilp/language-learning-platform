import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Language } from "./Language";

@Entity("user_subscribed_languages")
export class UserSubscribedLanguages {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, { onDelete: "CASCADE" })
    @JoinColumn({ name: "user_id" })
    userId: number;

    @ManyToOne(() => Language, { onDelete: "CASCADE" })
    @JoinColumn({ name: "language_id" })
    languageId: number;

    @Column({ nullable: true })
    currentProgress: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}
