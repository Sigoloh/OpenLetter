import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSubscribePageMessageColumn1637010628326 implements MigrationInterface {
    name = 'CreateSubscribePageMessageColumn1637010628326'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mail_man" RENAME COLUMN "subscribePageMessage" TO "subscriberMessage"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mail_man" RENAME COLUMN "subscriberMessage" TO "subscribePageMessage"`);
    }

}
