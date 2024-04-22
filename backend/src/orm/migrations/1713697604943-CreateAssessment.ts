import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateAssessment1713697604943 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "assessment",
                columns: [
                    {
                        name: "id",
                        type: "bigint",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "language_id",
                        type: "bigint",
                        isNullable: false,
                    },
                    {
                        name: "title",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "questions",
                        type: "jsonb",
                        isNullable: false,
                    },
                    {
                        name: "options",
                        type: "jsonb",
                        isNullable: false,
                    },
                    {
                        name: "correctAnswers",
                        type: "jsonb",
                        isNullable: false,
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

        await queryRunner.createForeignKey("assessment", new TableForeignKey({
            columnNames: ["language_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "languages",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("assessment", "FK_language_id");
        await queryRunner.dropTable("assessment");
    }

}
