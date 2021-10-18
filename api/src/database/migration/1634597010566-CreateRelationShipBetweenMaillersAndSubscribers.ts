import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateRelationShipBetweenMaillersAndSubscribers1634597010566 implements MigrationInterface {
    name = 'CreateRelationShipBetweenMaillersAndSubscribers1634597010566'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscribers" ADD "subscribedId" uuid`);
        await queryRunner.query(`ALTER TABLE "subscribers" ADD CONSTRAINT "FK_65ddeefe1868799406006414415" FOREIGN KEY ("subscribedId") REFERENCES "mail_man"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscribers" DROP CONSTRAINT "FK_65ddeefe1868799406006414415"`);
        await queryRunner.query(`ALTER TABLE "subscribers" DROP COLUMN "subscribedId"`);
    }

}
