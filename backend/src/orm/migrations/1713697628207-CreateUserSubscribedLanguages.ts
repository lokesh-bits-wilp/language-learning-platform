import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUserSubscribedLanguages1713697628207 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user_subscribed_languages",
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
                        name: "language_id",
                        type: "bigint",
                        isNullable: false,
                    },
                    {
                        name: "current_progress",
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

        await queryRunner.createForeignKey("user_subscribed_languages", new TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("user_subscribed_languages", new TableForeignKey({
            columnNames: ["language_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "languages",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("user_subscribed_languages", "FK_user_id");
        await queryRunner.dropForeignKey("user_subscribed_languages", "FK_language_id");
        await queryRunner.dropTable("user_subscribed_languages");
    }
}
