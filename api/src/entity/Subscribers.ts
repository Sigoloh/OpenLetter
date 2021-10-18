import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';
import mailMan from './UserModel';

@Entity()
export default class Subscribers {
    
    @PrimaryGeneratedColumn('uuid')
        id: string;
    
    @Column({
        type: 'varchar',
        unique: true,
        nullable: false,
        transformer: new EncryptionTransformer({
            key: `${process.env.PASSWORD_64}`,
            algorithm: 'aes-256-cbc',
            ivLength: 16,
            iv: `${process.env.PASSWOD_INICIALIZATION_VECTOR}`
        })
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
