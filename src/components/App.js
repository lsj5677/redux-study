import React from "react";
import BoardList from "./board/BoardList";
import BoardAdd from "./board/BoardAdd";
import { useSelector } from "react-redux";
import TodoList from "./todo/TodoList";
import TodoAdd from "./todo/TodoAdd";
import Bar from "./Bar";

function App() {
  const isBoardSelected = useSelector((state) => !!state.board.selectedBoardId);
  return (
    <div>
      <Bar />
      <div className="flex overflow-scroll">
        <div className="mt-10 flex-1 border-r border-blue-500">
          <BoardList />
          <BoardAdd />
        </div>
        <div className="flex-2">
          <TodoList />
          {isBoardSelected && <TodoAdd />}
        </div>
      </div>
    </div>
  );
}

export default App;
