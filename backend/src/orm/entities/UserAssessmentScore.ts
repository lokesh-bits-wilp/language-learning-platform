import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Assessment } from "./Assessment";

@Entity("user_assessment_scrore")
export class UserAssessmentScore {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, { onDelete: "CASCADE" })
    @JoinColumn({ name: "user_id" })
    userId: number;

    @ManyToOne(() => Assessment, { onDelete: "CASCADE" })
    @JoinColumn({ name: "assignment_id" })
    assignmentId: number;

    @Column({ nullable: true })
    score: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}
