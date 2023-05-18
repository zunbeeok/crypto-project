import { Injectable } from '@nestjs/common';
import { BoardInterface } from './board.interface';

@Injectable()
export class BoardService implements BoardInterface {

    constructor() {

    }

    getBoardAll(): BoardDto[] {
        return;
    }

    getBoardByBoardName(boardTitle: string): BoardDto[] {
        return;

    }

    getBoardByUserId(userId: string): BoardDto[] {
        return;

    }

    deleteBoard(index: number): void {

    }

}
