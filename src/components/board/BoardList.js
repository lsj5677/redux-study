import { useDispatch, useSelector } from "react-redux";
import BoardItem from "./BoardItem";
import { deleteBoard, selectBoard } from "../../redux/slices/boardSlice";
import deleteBoardThunk from "../../redux/thunks/deleteBoardThunk";

function BoardList(props) {
  const boards = useSelector((state) => state.board.boards);
  const selectedBoardId = useSelector((state) => state.board.selectedBoardId);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-6">
      {boards.map((board, index) => {
        const isSelected = board.id === selectedBoardId;
        return (
          <BoardItem
            key={index}
            board={board}
            isSelected={isSelected}
            onSelect={() => dispatch(selectBoard(board.id))}
            onDelete={() => dispatch(deleteBoardThunk(board.id))}
          />
        );
      })}
    </div>
  );
}

export default BoardList;
