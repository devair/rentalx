import { v4 as uuidv4 } from 'uuid';
import { Entity, PrimaryColumn, Column, CreateDateColumn} from 'typeorm'

@Entity('users')
class User {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    driver_license: string;

    @Column()
    isAdmin: boolean;

    @Column()
    avatar: string;  

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
}

export { User };