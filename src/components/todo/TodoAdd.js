import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/slices/todoSlice";

function TodoAdd() {
  const [newTodoName, setNewTodoName] = useState("");

  const selectedBoardId = useSelector((state) => state.board.selectedBoardId);

  const dispatch = useDispatch();

  return (
    <div className="p-2">
      <input
        type="text"
        className="border border-blue-200 p-3"
        value={newTodoName}
        onChange={(e) => setNewTodoName(e.target.value)}
      />
      <button
        className="border bg-blue-200 p-3"
        onClick={() => {
          if (newTodoName === "") {
            alert("Please enter the To do");
            return;
          }

          dispatch(
            addTodo({
              boardId: selectedBoardId,
              todo: newTodoName,
            }),
          );

          setNewTodoName("");
        }}
      >
        ADD TODO
      </button>
    </div>
  );
}

export default TodoAdd;
