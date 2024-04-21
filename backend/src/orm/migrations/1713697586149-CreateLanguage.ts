import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateLanguage1713697586149 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "languages",
                columns: [
                    {
                        name: "id",
                        type: "bigint",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "vocab",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "grammar",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "audio",
                        type: "text",
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("languages");
    }

}
