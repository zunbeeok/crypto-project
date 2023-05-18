
export interface BoardInterface {

    /**
     * getBoardList
     * 모든 게시판 데이터 가져오기.
     */
    getBoardAll(): BoardDto[];

    /**
     * getBoardByUserId
     * @param userId 회원 Id
     * 회원아이디로 조회. 
     */
    getBoardByUserId(userId: string): BoardDto[];

    /**
     * getBoardByBoardName
     * @param boardTitle 게시판 제목.
     * 게시판 제목을 기준으로 
     */
    getBoardByBoardName(boardTitle: string): BoardDto[];

    /**
     * deleteBoard
     * @param index 게시글 고유 ID
     * 고유글을 기준으로 게시글을 삭제한다.
     */
    deleteBoard(index: number): void;


}