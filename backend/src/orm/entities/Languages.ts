import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("languages")
export class Languages {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ type: "text", nullable: true })
    description: string;

    @Column({ type: "text", nullable: true })
    vocab: string;

    @Column({ type: "text", nullable: true })
    grammar: string;

    @Column({ type: "text", nullable: true })
    audio: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}
