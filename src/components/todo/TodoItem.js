function TodoItem(props) {
  const { todo, onFinish, onDelete } = props;

  return (
    <div className="flex justify-between gap-4 p-3">
      <input type="checkbox" checked={todo.isFinished} onChange={onFinish} />
      <div
        className={`flex-1 text-blue-800 ${todo.isFinished && "text-gray-300"}`}
      >
        {todo.title}
      </div>
      <button onClick={onDelete}>DELETE</button>
    </div>
  );
}

export default TodoItem;
