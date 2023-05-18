import { Controller, Get } from '@nestjs/common';

@Controller('board')
export class BoardController {

    @Get()
    public getBoardList() {

    }

}
