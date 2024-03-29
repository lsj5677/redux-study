import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { deleteTodo, toggleFinishTodo } from "../../redux/slices/todoSlice";

function TodoList() {
  const selectedBoardId = useSelector((state) => state.board.selectedBoardId);
  const selectedBoardTodos = useSelector(
    (state) => state.todo.boardTodosMap[selectedBoardId],
  );

  const dispatch = useDispatch();

  if (!selectedBoardTodos) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      {selectedBoardTodos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onFinish={(e) => {
            e.stopPropagation();

            dispatch(
              toggleFinishTodo({
                boardId: selectedBoardId,
                todoId: todo.id,
              }),
            );
          }}
          onDelete={(e) => {
            e.stopPropagation();

            dispatch(
              deleteTodo({
                boardId: selectedBoardId,
                todoId: todo.id,
              }),
            );
          }}
        />
      ))}
    </div>
  );
}

export default TodoList;
