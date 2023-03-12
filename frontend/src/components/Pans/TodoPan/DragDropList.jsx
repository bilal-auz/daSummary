import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ListItem from "./ListItem";

function DragDropList(props) {
  // const [itemList, setItemList] = useState(props.items);

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

    updatedList.splice(index, 0);
    props.setDefault_items(updatedList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="list-container">
          {(provided) => (
            <div
              className="list-container p-2"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {props.default_items.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided) => (
                    <ListItem
                      provided={provided}
                      value={item}
                      handleDelete={handleDelete}
                      index={index}
                    ></ListItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button>add</button>
    </div>
  );
}

export default DragDropList;
