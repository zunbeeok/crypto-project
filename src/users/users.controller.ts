import { Inject,Controller, Get ,Post,Body} from '@nestjs/common';
import { UserDto } from './dto/users.user.dto';
import { UsersInterface } from './users.interface';

@Controller('users')
export class UsersController {
    constructor(
        @Inject("UsersInterface") private readonly usersService:UsersInterface
    ){}
    
    @Get('/join')
    getUserForm():string{
        return;
    }

    @Post('/join')
    async joinUser(@Body() userDto:UserDto){
        console.log('test');
        //회원가입 요청시 처리 여부는 바로 해주지 않는다?
        await  this.usersService.join(userDto);
        return {"result":"success"};
    }

    @Get('/info')
    async getUser(){
        
    }
    
}
