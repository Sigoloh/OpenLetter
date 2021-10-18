import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreateUsersTable1634593483204 implements MigrationInterface {
    name = 'CreateUsersTable1634593483204';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE "mail_man" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "listaDeInscritos" character varying NOT NULL, "senha" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_852265a4bd2a4462f1cd7d89668" UNIQUE ("email"), CONSTRAINT "PK_b9f93fa39919a35252681d5c449" PRIMARY KEY ("id"))');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE "mail_man"');
    }

}
