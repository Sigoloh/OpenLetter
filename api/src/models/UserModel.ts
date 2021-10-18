import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';

@Entity()
export class User{

    @PrimaryGeneratedColumn('uuid')
        id: number;
    
    @Column({nullable: false})
        name: string;
    
    @Column({unique: true, nullable: false})
        email: string;
    
    @Column({nullable: false})
        listaDeInscritos: string;
    
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

    @CreateDateColumn({nullable: false})
        createdAt: string;
    
    @UpdateDateColumn({nullable: false})
        updatedAt: string;

    @DeleteDateColumn({nullable: false})
        deletedAt: string;


}