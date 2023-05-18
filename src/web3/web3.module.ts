import { Module } from '@nestjs/common';
import { Web3Service } from './web3.service';

@Module({
  providers: [{
    provide: "Web3Interface",
    useClass: Web3Service
  }],
  exports: ["Web3Interface"]

})
export class Web3Module { }
