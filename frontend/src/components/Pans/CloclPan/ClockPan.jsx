import React, { useState } from "react";
import { Display } from "react-7-segment-display";

function ClockPan() {
  const [time, setTime] = useState(new Date());
  const [color, setColor] = useState("#0a1424");
  const getCurrentTime = () => {
    var today = new Date();
    setTime(today);
  };

  setInterval(getCurrentTime, 1000);

  return (
    <div className="flex flex-row">
      <Display
        height="80"
        value={String(time.getHours())}
        color={color}
        skew={true}
      />
      <Display
        height="80"
        value={String(time.getMinutes())}
        color={color}
        skew={true}
      />
      <Display
        height="80"
        value={String(time.getSeconds())}
        color={color}
        skew={true}
      />
    </div>
  );
}

export default ClockPan;
