import { Web3BlockDto } from "src/web3/dto/web3.block.dto";
import { Web3TransactionsDto } from "src/web3/dto/web3.transaction.dto";

export interface Web3Interface {
    getTransaction(txId: string): Promise<Web3TransactionsDto>;
    getBlock(blockNumber: number): Promise<Web3BlockDto>;
}