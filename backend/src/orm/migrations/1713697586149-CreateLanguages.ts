import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateLanguages1713697586149 implements MigrationInterface {

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

        await queryRunner.query(
            `INSERT INTO languages (id, name, description, vocab, grammar, audio, created_at, updated_at) VALUES(1, 'English', 'Description', 'Vocab', 'Grammar', 'Audio', '2024-04-22 22:13:25.742', '2024-04-22 22:13:25.742')`
        );
        await queryRunner.query(
            `INSERT INTO languages (id, name, description, vocab, grammar, audio, created_at, updated_at) VALUES(2, 'Hindi', 'Description', 'Vocab', 'Grammar', 'Audio', '2024-04-22 22:13:25.742', '2024-04-22 22:13:25.742')`
        );
        await queryRunner.query(
            `INSERT INTO languages (id, name, description, vocab, grammar, audio, created_at, updated_at) VALUES(3, 'Marathi', 'Description', 'Vocab', 'Grammar', 'Audio', '2024-04-22 22:13:25.742', '2024-04-22 22:13:25.742')`
        );
        await queryRunner.query(
            `INSERT INTO languages (id, name, description, vocab, grammar, audio, created_at, updated_at) VALUES(4, 'Tamil', 'Description', 'Vocab', 'Grammar', 'Audio', '2024-04-22 22:13:25.742', '2024-04-22 22:13:25.742')`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("languages");
    }

}
