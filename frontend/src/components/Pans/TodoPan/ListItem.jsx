import React from "react";

function ListItem({ provided, value, handleDelete, index }) {
  return (
    <div
      className="item-container flex flex-row items-center justify-start w-auto min-h-8 h-auto mb-2 p-3 rounded bg-[#1e293b] text-smoke"
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      {...provided.draggableProps}
    >
      <input
        type="checkbox"
        checked="checked"
        className="checkbox checkbox-xs mr-3 tex"
      />
      <p className="mr-5">{value}</p>
      <button
        class="btn btn-xs btn-ghost m-0 p-0"
        onClick={() => handleDelete(index)}
      >
        🗑️
      </button>
    </div>
  );
}

export default ListItem;
