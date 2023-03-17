import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import "./DragDropList.css";

function DragDropList(props) {
  // const [itemList, setItemList] = useState(props.items);

  const [addBtnUsed, setAddBtnUsed] = useState(false);

  const handleDrop = (droppedItem) => {
    // if outside the Droppable context
    if (!droppedItem.destination) return;

    var updatedList = [...props.default_items];

    //remove the draggedItem from the list
    const [recordedItem] = updatedList.splice(droppedItem.source.index, 1);

    updatedList.splice(droppedItem.destination.index, 0, recordedItem);

    props.setDefault_items(updatedList);
  };

  const handleDelete = (index) => {
    console.log(index);
    var updatedList = [...props.default_items];

    updatedList.splice(index, 1);
    props.setDefault_items(updatedList);
  };

  const handleChange = (index, newValue) => {
    var updatedList = [...props.default_items];

    updatedList[index] = newValue;

    props.setDefault_items(updatedList);
  };

  const handleAddTask = () => {
    //if the button clicked/used (means next click should submit the task)
    if (!addBtnUsed) {
      props.setDefault_items([
        "Double click to edit...",
        ...props.default_items,
      ]);
    }
  };

  return (
    <div className="relative p-7 w-[350px] max-h-[400px]">
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="list-container">
          {(provided) => (
            <div className="overflow-y-auto h-[340px] pr-1 m-0">
              <div
                className="list-container "
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {props.default_items.map((item, index) => (
                  <Draggable
                    key={item.text + index}
                    draggableId={String(index)}
                    index={index}
                  >
                    {(provided) => (
                      <ListItem
                        provided={provided}
                        value={item}
                        handleDelete={handleDelete}
                        handleChange={handleChange}
                        index={index}
                      ></ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button
        className="btn btn-circle btn-ghost p-0 m-0 relative bottom-[-8px]"
        onClick={handleAddTask}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
            fill="#292D32"
          />
        </svg>
      </button>
    </div>
  );
}

export default DragDropList;
