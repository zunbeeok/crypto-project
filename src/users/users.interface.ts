import { UserDto } from "./dto/users.user.dto";

export interface UsersInterface {
    join(user:UserDto):void;

    getUserById(id:string):UserDto;

    getUserByHp(hp:string):UserDto;
}
