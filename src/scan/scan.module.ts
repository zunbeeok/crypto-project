import { Module } from '@nestjs/common';
import { ScanService } from './scan.service';
import { Web3Module } from 'src/web3/web3.module';
import { Web3Service } from 'src/web3/web3.service';


//scan은 따른 클래스에 의존할 필요없이 개발할 예정이므로 interface를 쓰지 않을 예정.
@Module({
  imports: [Web3Module],
  providers: [ScanService],
  // exports: [Web3Module]
})
export class ScanModule { }
