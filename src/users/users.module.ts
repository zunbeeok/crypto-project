import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports:[
  ],
  controllers: [UsersController],
  providers: [{
    provide: "UsersInterface",
    useClass: UsersService
  }],
  // exports:["UsersInterface"]
})
export class UsersModule {}
