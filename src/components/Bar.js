import { useDispatch, useSelector } from "react-redux";
import { resetBoardSagaRequested } from "../redux/slices/boardSlice";
import { useMemo } from "react";

function Bar() {
  const boards = useSelector((state) => state.board.boards);
  const boardTodosMap = useSelector((state) => state.todo.boardTodosMap);
  const dispatch = useDispatch();

  const [unfinishedTodoCount, finishedTodoCount] = useMemo(() => {
    let unfinishedTodoCount = 0;
    let finishedTodoCount = 0;

    Object.values(boardTodosMap).forEach((todos) => {
      todos.forEach((todo) => {
        if (todo.isFinished) {
          finishedTodoCount++;
        } else {
          unfinishedTodoCount++;
        }
      });
    });

    return [unfinishedTodoCount, finishedTodoCount];
  }, [boardTodosMap]);

  return (
    <nav className="w-[calc(100% - 32px)] flex justify-between border-b border-black p-4 ">
      <h1>REDUX</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm">
          {`Board : ${boards.length} / `}
          {`Todo (Progress : ${unfinishedTodoCount} | Done : ${finishedTodoCount}`}
        </span>
        <button
          onClick={() => {
            if (window.confirm("Are you sure you want to reset?")) {
              dispatch(resetBoardSagaRequested());
            }
          }}
        >
          RESET
        </button>
      </div>
    </nav>
  );
}

export default Bar;
