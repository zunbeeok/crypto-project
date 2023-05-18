import { Injectable } from '@nestjs/common';
import Web3 from 'web3';
import { Web3Interface } from './web3.interface';
import { Web3TransactionsDto } from 'src/web3/dto/web3.transaction.dto';
import { Web3BlockDto } from 'src/web3/dto/web3.block.dto';
import axios from 'axios';

@Injectable()
export class Web3Service implements Web3Interface {
    private web3; //스태틱으로 빼고 싶은데 static으로 빼게되면 기능 테스트시 web3에서 반환값이 안되어 어렵다.

    async onModuleInit() {
        this.web3 = new Web3("https://mainnet.infura.io/v3/57f4344b6c1346b893a4c96e5cedb743");
        await this.getBlock(17281927);
    }

    async getTransaction(txId: string): Promise<Web3TransactionsDto> {
        return await this.web3.eth.getTransaction(txId);
    }

    //블록 dto로 만드는거 생각좀 해보자.
    async getBlock(blockNumber: number): Promise<Web3BlockDto> {
        return await this.web3.eth.getBlock(blockNumber);
    }

}
