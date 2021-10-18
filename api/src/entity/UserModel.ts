import Subscribers from './Subscribers';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany} from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';

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
        transformer: new EncryptionTransformer({
            key: `${process.env.PASSWORD_64}`,
            algorithm: 'aes-256-cbc',
            ivLength: 16,
            iv: `${process.env.PASSWOD_INICIALIZATION_VECTOR}`
        })
    })
        senha: string;

    @OneToMany(() => Subscribers, subscriber => subscriber.subscribed, {eager: true})
        subscribers: Subscribers[];

    @CreateDateColumn({nullable: false})
        createdAt: string;
    
    @UpdateDateColumn({nullable: false})
        updatedAt: string;

    @DeleteDateColumn({nullable: false})
        deletedAt: string;


}