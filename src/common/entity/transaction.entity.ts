import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * https://web3js.readthedocs.io/en/v1.10.0/web3-eth.html#gettransaction
 * 일단 크론에서 읽는것들은 그대로 넣을 예정. 너무 커봤자 안좋은것 같다.
 */
@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    hash: string

    @Column()
    nonce: number;

    @Column()
    blockHash: string;

    @Column()
    blockNumber: number;

    @Column()
    transactionIndex: number;

    @Column()
    from: string;

    @Column()
    to: string;

    @Column()
    value: string;

    @Column()
    gasPrice: string;

    @Column()
    gas: number;

    @Column()
    input: string;
}