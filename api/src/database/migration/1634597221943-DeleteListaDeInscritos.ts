import {MigrationInterface, QueryRunner} from "typeorm";

export class DeleteListaDeInscritos1634597221943 implements MigrationInterface {
    name = 'DeleteListaDeInscritos1634597221943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mail_man" DROP COLUMN "listaDeInscritos"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mail_man" ADD "listaDeInscritos" character varying NOT NULL`);
    }

}
