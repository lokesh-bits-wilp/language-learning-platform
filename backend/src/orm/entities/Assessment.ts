import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Language } from "./Language";

@Entity("assessment")
export class Assessment {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Language, (language) => language.id, { onDelete: "CASCADE" })
    @JoinColumn({ name: "language_id" })
    languageId: number;

    @Column({ nullable: false })
    title: string;

    @Column({ type: "jsonb", nullable: false })
    questions: object;

    @Column({ type: "jsonb", nullable: false })
    options: object;

    @Column({ type: "jsonb", nullable: false })
    correctAnswers: object;
}
