import Subscribers from './Subscribers';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany} from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';
// Todo: Remove this dotenv instantiation
import * as dotenv from 'dotenv';
dotenv.config();
@Entity()
export default class mailMan{

    @PrimaryGeneratedColumn('uuid')
        id: number;
    
    @Column({nullable: false})
        name: string;
    
    @Column({unique: true, nullable: false})
        email: string;
    @Column({
        type: 'varchar',
        nullable: false,
    })
        password: string;

    @OneToMany(() => Subscribers, subscriber => subscriber.subscribed, {eager: true})
        subscribers: Subscribers[];

    @CreateDateColumn({nullable: false})
        createdAt: string;
    
    @UpdateDateColumn({nullable: false})
        updatedAt: string;

    @DeleteDateColumn({nullable: false})
        deletedAt: string;


}