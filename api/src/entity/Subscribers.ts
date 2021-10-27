import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';
import mailMan from './UserModel';
// Todo: Remove this dotenv instantiation
import * as dotenv from 'dotenv';
dotenv.config();

@Entity()
export default class Subscribers {
    
    @PrimaryGeneratedColumn('uuid')
        id: string;
    
    @Column({
        type: 'varchar',
        unique: true,
        nullable: false,
    })
        email: string;

    @ManyToOne(() => mailMan, mailMan => mailMan.subscribers)
        subscribed: mailMan;
    
    @CreateDateColumn()
        createdAt: string;

    @UpdateDateColumn()
        updatedAt: string;

    @DeleteDateColumn()
        deletedAt: string;
}
