function BoardItem(props) {
  const { board, isSelected, onSelect, onDelete } = props;
  return (
    <div
      onClick={onSelect}
      className={`m-auto flex w-2/3 cursor-pointer justify-between rounded-md bg-blue-300 p-4 hover:bg-blue-500 ${isSelected && `bg-gray-500`} `}
    >
      <h2>{board.title}</h2>
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (window.confirm("Are you sure you want to delete it?")) {
            onDelete();
          }
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default BoardItem;
