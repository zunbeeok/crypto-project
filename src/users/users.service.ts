import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserDto } from './dto/users.user.dto';
import { User } from 'src/common/entity/user.entity';

@Injectable()
export class UsersService implements UsersService {
    constructor(
        private readonly dataSource:DataSource,
    ){
    }

    async join(user:UserDto){
        //맵핑
        const userEntity=new User(user.id,user.pw,user.name,user.hpNumber);
        const queryRunner = this.dataSource.createQueryRunner();

        //회원 저장 에러처리.
        try{
            //db커넥션 에러처리
            try{
                await queryRunner.connect();
                await queryRunner.startTransaction();
                await queryRunner.manager.save(userEntity);
                await queryRunner.commitTransaction();
            }catch(err){
                console.log(err);
                await queryRunner.rollbackTransaction();
            }finally{
                await queryRunner.release();
            }
        }catch(err){
            console.log(err);
        }
        return;
    }

    async getUser(){

    }
    
}
