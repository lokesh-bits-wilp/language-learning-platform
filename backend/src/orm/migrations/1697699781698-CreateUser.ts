import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUser1697699781698 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "bigint",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "firstName",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "lastName",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "role",
                        type: "enum",
                        enum: ["ADMIN", "USER"],
                        enumName: "Role",
                    },
                    {
                        name: "email_verification_token",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "email_verification_status",
                        type: "boolean",
                        default: false,
                        isNullable: false,
                    },
                    {
                        name: "status",
                        type: "boolean",
                        default: true,
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
    }

}
