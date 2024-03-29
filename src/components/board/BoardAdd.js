import { useDispatch } from "react-redux";
import { createBoard } from "../../redux/slices/boardSlice";
import { useState } from "react";

function BoardAdd() {
  const dispatch = useDispatch();
  const [newBoardTitle, setNewBoardTitle] = useState("");

  return (
    <div className="m-auto flex w-2/3 p-8">
      <input
        type="text"
        value={newBoardTitle}
        className="w-full border border-blue-200 p-3"
        onChange={(e) => setNewBoardTitle(e.target.value)}
      />

      <button
        className="min-w-[150px] shrink-0 bg-blue-200 px-3"
        onClick={() => {
          if (newBoardTitle === "") {
            alert("Please enter the board title.");
            return;
          }

          dispatch(createBoard(newBoardTitle));
          setNewBoardTitle("");
        }}
      >
        Add board
      </button>
    </div>
  );
}

export default BoardAdd;
