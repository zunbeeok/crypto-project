import { Inject, Injectable } from '@nestjs/common';
import { Web3TransactionsDto } from 'src/web3/dto/web3.transaction.dto';
import { Web3Interface } from 'src/web3/web3.interface';



@Injectable()
export class ScanService {
    private processBlockNumber: number;

    constructor(
        @Inject("Web3Interface") private readonly web3service: Web3Interface,
        private readonly
    ) {

    }

    private onModuleInit() {

    }

    private onApplicationBootstrap() {
        //테이블 조회하여 처리한 블록넘버까지 돌리기.
        this.scanning(17281927);
    }

    private async scanning(processBlockNumber) {
        const txIdList = (await this.web3service.getBlock(processBlockNumber)).transactions;
        //문제.. getBlock시 transaction을 주지 않음. 노드가 문제인것 같은데. 생각해보기.
        console.log(txIdList);
        for (const txId of txIdList) {
            console.log(await this.web3service.getTransaction(txId));
        }
    }



}
