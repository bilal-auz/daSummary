import React, { useEffect, useState } from "react";
import DragDropList from "./DragDropList";

function TodoPan() {
  const [default_items, setDefault_items] = useState([
    "Lorem ipsum dolor sit amet consectetur adipisicing",
    "B",
    "C",
    "D",
  ]);
  useEffect(() => {
    console.log("changed");
  }, [default_items]);
  return (
    <div className="weatherCard card text-neutral-content shadow-xl w-auto">
      <DragDropList
        default_items={default_items}
        setDefault_items={setDefault_items}
      />
    </div>
  );
}

export default TodoPan;
