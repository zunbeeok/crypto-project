import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScanModule } from './scan/scan.module';
import { Web3Module } from './web3/web3.module';
import { UsersModule } from './users/users.module';
import { ConfigModule,ConfigService } from '@nestjs/config';
import {validationSchema}  from './common/config/validation';

console.log(`${__dirname}/config/env/.dev.env`);
@Module({
  imports: [BoardModule,
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:(configService:ConfigService)=>({
        type: "mysql",
        host: configService.get("DB_HOST"),
        port: configService.get("DB_PORT"),
        username: configService.get("DB_USERNAME"),
        password: configService.get("DB_PASSWORD"),
        database: configService.get("DB_DATABASE"),
        entities: [
          __dirname + '/common/entity/*.entity.*'
        ],
        synchronize: true,
        logging: true,
        autoLoadEntities: true,
      })
    }),
    ScanModule,
    Web3Module,
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/common/config/env/.dev.env`],
      load:[],
      isGlobal:true,
      validationSchema
    })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
