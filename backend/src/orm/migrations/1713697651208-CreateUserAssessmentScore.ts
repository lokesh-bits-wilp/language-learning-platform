import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUserAssessmentScore1713697651208 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user_assessment_progress",
                columns: [
                    {
                        name: "id",
                        type: "bigint",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "user_id",
                        type: "bigint",
                        isNullable: false,
                    },
                    {
                        name: "assignment_id",
                        type: "bigint",
                        isNullable: false,
                    },
                    {
                        name: "score",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    }
                ],
            }),
            true
        );

        await queryRunner.createForeignKey("user_assessment_progress", new TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("user_assessment_progress", new TableForeignKey({
            columnNames: ["assignment_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "assessment",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("user_assessment_progress", "FK_user_id");
        await queryRunner.dropForeignKey("user_assessment_progress", "FK_assignment_id");
        await queryRunner.dropTable("user_assessment_progress");
    }

}
