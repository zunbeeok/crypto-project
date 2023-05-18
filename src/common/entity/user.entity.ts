import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    pkId: Number

    @Column()
    id:string

    @Column()
    pw:string

    @Column()
    name: string

    @Column()
    hpNumber:string

    constructor(id,pw,name,hpNumber){
        this.id =id;
        this.pw=pw;
        this.name = name;
        this.hpNumber = hpNumber
    }
}