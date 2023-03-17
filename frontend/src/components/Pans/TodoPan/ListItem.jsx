import React, { useState } from "react";

function ListItem({ provided, value, handleDelete, index, handleChange }) {
  const [toggled, setToggled] = useState(false);
  const [newValue, setNewValue] = useState(value.text);
  const [checked, setChecked] = useState(value.checked);

  const toggleInput = () => {
    setToggled(!toggled);
  };

  const onKeyPressed = (event) => {
    if (event.key === "Enter") {
      handleChange(index, newValue);
      toggleInput();
    }

    if (event.key === "Escape") {
      setNewValue(value.text);
      toggleInput();
    }
  };

  const onChangeValue = (event) => {
    setNewValue(event.target.value);
  };

  const handleChecked = () => {
    //handle checking and update the list in databse if connected
    setChecked(!checked);
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
        checked={checked}
        className="checkbox checkbox-xs mr-3 tex"
        onChange={handleChecked}
      />
      {!toggled ? (
        <p
          className={checked ? "mr-5 line-through decoration-1" : "mr-5"}
          onDoubleClick={toggleInput}
        >
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
