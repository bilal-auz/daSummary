import React, { useState } from "react";

function ListItem({ provided, value, handleDelete, index, handleChange }) {
  const [toggled, setToggled] = useState(false);
  const [newValue, setNewValue] = useState(value);

  const toggleInput = () => {
    setToggled(!toggled);
  };

  const onKeyPressed = (event) => {
    if (event.key === "Enter") {
      handleChange(index, newValue);
      toggleInput();
    }

    if (event.key === "Escape") {
      setNewValue(value);
      toggleInput();
    }
  };

  const onChangeValue = (event) => {
    setNewValue(event.target.value);
  };

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
      {!toggled ? (
        <p className="mr-5" onDoubleClick={toggleInput}>
          {newValue}
        </p>
      ) : (
        <input
          type="text"
          value={newValue}
          onChange={onChangeValue}
          onKeyDown={onKeyPressed}
        />
      )}
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
