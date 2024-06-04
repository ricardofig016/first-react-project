import React, { useState, useEffect } from "react";

function DigitalClock(props) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 100);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = padZero(time.getMinutes());
    const seconds = padZero(time.getSeconds());
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = padZero(hours % 12 || 12);

    return `${hours}:${minutes}:${seconds} ${meridiem}`;
  }

  function padZero(number) {
    return number < 10 ? "0" + number : number;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
